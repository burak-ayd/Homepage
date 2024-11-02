import MainItem from "./item/index";
import {
    DndContext,
    DragOverlay,
    closestCenter,
    MouseSensor,
    KeyboardSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable/dist";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import PropTypes from "prop-types";
import { bookmarksData } from "~/utils/data";
import { useSetEdit } from "~/stores/app/hooks";
import { useEffect } from "react";
import classNames from "classnames";

const SortableBookmark = ({ item }) => {
    const useEdit = useSetEdit();

    const {
        isDragging,
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id: item.id,
    });

    const style = {
        transform: isDragging ? CSS.Translate.toString(transform) : null,
        transition: isDragging ? transition : null,
        zIndex: isDragging ? 1 : 0,
        scale: isDragging ? 1.05 : 1,
        opacity: 1,
    };

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            className="!opacity-100"
        >
            <MainItem
                key={item.id}
                name={item.name}
                url={item.url}
                icon={item.icon}
                id={item.id.toString()}
            />
        </div>
    );
};

SortableBookmark.propTypes = {
    item: PropTypes.object,
};

const MainPanel = () => {
    const useEdit = useSetEdit();

    const [isEditing, setSetEdit] = useState(useEdit);

    useEffect(() => {
        setSetEdit(useEdit);
    }, [useEdit]);

    const [bookmarks, setBookmarks] = useState(bookmarksData);
    const [isDragging, setIsDragging] = useState(false);
    const [activeId, setActiveId] = useState(null);

    const onDragEnd = (event) => {
        if (!isEditing) return;
        setIsDragging(false);
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = bookmarks.findIndex(
                (item) => item.id === active.id
            );
            console.log("oldIndex", oldIndex);
            const newIndex = bookmarks.findIndex((item) => item.id === over.id);
            console.log("newIndex", newIndex);
            // Sıralama işlemi
            // const newBookmarksData = [...bookmarks];
            // newBookmarksData.splice(oldIndex, 1);
            // newBookmarksData.splice(newIndex, 0, bookmarks[oldIndex]);
            // setBookmarks(newBookmarksData);

            // Swap işlemi
            const updatedBookmarks = [...bookmarks];
            const temp = updatedBookmarks[oldIndex];
            console.log("active ", temp);
            updatedBookmarks[oldIndex] = updatedBookmarks[newIndex];
            console.log("over ", updatedBookmarks[newIndex]);
            updatedBookmarks[newIndex] = temp;
            setBookmarks(updatedBookmarks);
        }
    };

    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: {
            distance: 10, // Enable sort function when dragging 10px   💡 here!!!
        },
    });
    const keyboardSensor = useSensor(KeyboardSensor);
    const sensors = useSensors(mouseSensor, keyboardSensor);

    console.log("isDragging", isDragging, "activeId", activeId);
    console.log("isEditing", isEditing);

    return (
        <div className="block w-full h-full px-1 box-border z-10 ">
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={isEditing ? onDragEnd : null}
                onDragStart={(e) => {
                    if (isEditing) {
                        setIsDragging(true);
                        setActiveId(e.active.id);
                    }
                }}
            >
                <SortableContext items={bookmarks.map((item) => item.id)}>
                    <div
                        className={classNames(
                            "grid grid-cols-15 grid-rows-6 w-full h-full",
                            {
                                draggable: isEditing,
                            }
                        )}
                    >
                        {bookmarks.map((item) => (
                            <SortableBookmark key={item.id} item={item} />
                        ))}
                    </div>
                </SortableContext>
                <DragOverlay>
                    {isEditing &&
                        activeId &&
                        bookmarks.find((item) => item.id === activeId) && (
                            <div className="draggable grid grid-cols-15 grid-rows-6 w-full h-full scale-105">
                                <SortableBookmark
                                    key={activeId}
                                    item={bookmarks.find(
                                        (item) => item.id === activeId
                                    )}
                                />
                            </div>
                        )}
                </DragOverlay>
            </DndContext>
        </div>
    );
};

export default MainPanel;
