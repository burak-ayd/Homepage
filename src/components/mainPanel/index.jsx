import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import MainItem from "./item";

const MainPanel = () => {
    const [items, setItems] = useState([
        {
            id: "1",
            text: "Item 1",
            imageSrc: "https://i.imgur.com/2ZbkgNQ.png",
            url: "https://www.google.com",
        },
        {
            id: "2",
            text: "Item 2",
            imageSrc: "https://i.imgur.com/2ZbkgNQ.png",
            url: "https://www.google.com",
        },
        {
            id: "3",
            text: "Item 3",
            imageSrc: "https://i.imgur.com/2ZbkgNQ.png",
            url: "https://www.google.com",
        },
        {
            id: "4",
            text: "Item 4",
            imageSrc: "https://i.imgur.com/2ZbkgNQ.png",
            url: "https://www.google.com",
        },
        {
            id: "5",
            text: "Item 5",
            imageSrc: "https://i.imgur.com/2ZbkgNQ.png",
            url: "https://www.google.com",
        },
    ]);

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const newItems = Array.from(items);
        const [movedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, movedItem);

        const updatedItems = newItems.map((item, index) => ({
            ...item,
            index: index + 1,
        }));

        setItems(updatedItems);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                            display: "flex",
                            // Ek bir stil ayarı yapmak isterseniz burada düzenlemeler yapabilirsiniz.
                        }}
                    >
                        {items.map((item, index) => (
                            <MainItem
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                imageSrc={item.imageSrc}
                                index={index}
                                url={item.url}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default MainPanel;
