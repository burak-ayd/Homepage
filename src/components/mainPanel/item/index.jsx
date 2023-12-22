import PropTypes from "prop-types";
import { useDrag, useDrop } from "react-dnd";

const MainItem = ({ bookmark, index, moveBookmark }) => {
    const [{ isDragging }, drag] = useDrag({
        type: "ITEM",
        item: { index },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    // const [, drag] = useDrag({
    //     type: "ITEM",
    //     item: { index },
    // });

    const [, drop] = useDrop({
        accept: "ITEM",
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveBookmark(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return (
        <div
            ref={(node) => drag(drop(node))}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: "move",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                backgroundColor: "#e0e0e0",
                borderRadius: "8px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "8px",
            }}
        >
            <a
                href={bookmark.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-2 bg-gray-200 rounded-md shadow-md hover:bg-gray-300"
            >
                <img
                    src={bookmark.icon}
                    alt={bookmark.name}
                    className="w-10 h-10"
                />
                <span className="text-xs">{bookmark.name}</span>
            </a>
        </div>
    );
};

MainItem.propTypes = {
    bookmark: PropTypes.object,
};

export default MainItem;
