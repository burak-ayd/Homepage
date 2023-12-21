import React from "react";
import { Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";

class MainItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDragging: false,
        };
    }

    handleDragStart = () => {
        this.setState({
            isDragging: true,
        });
    };

    handleDragEnd = () => {
        this.setState({
            isDragging: false,
        });
    };

    handleClick = () => {
        const { url } = this.props;
        if (!this.state.isDragging) {
            window.location.href = url;
        }
    };

    render() {
        const { imageSrc, text, index, id } = this.props;

        return (
            <Draggable key={id} draggableId={id} index={index}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={this.handleClick}
                        className={`flex flex-col items-center justify-between w-[120px] h-36 border-black border rounded-md m-2 p-2 cursor-move ${
                            snapshot.isDragging && "dragging"
                        }`}
                    >
                        <img
                            src={imageSrc}
                            className="min-w-14 min-h-14 rounded-lg"
                            alt="Resim"
                        />
                        <p>{text}</p>
                    </div>
                )}
            </Draggable>
        );
    }
}

MainItem.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
};

export default MainItem;
