// BookmarkModal.js
import PropTypes from "prop-types";
import { useState } from "react";

const BookmarkModal = ({ isOpen, onClose, onAddBookmark }) => {
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");

    const handleAddBookmark = () => {
        // Verileri kontrol edebilir ve gerekli işlemleri gerçekleştirebilirsiniz
        if (url && name && icon) {
            onAddBookmark({ url, name, icon });
            setUrl("");
            setName("");
            setIcon("");
            onClose();
        } else {
            alert("Lütfen tüm alanları doldurun.");
        }
    };

    return (
        <div className={`modal ${isOpen ? "is-open" : ""}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>Add Bookmark</h2>
                <label>
                    URL:
                    <input
                        type="text"
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                    />
                </label>
                <label>
                    Name:
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>
                <label>
                    Icon:
                    <input
                        type="text"
                        onChange={(e) => setIcon(e.target.value)}
                        value={icon}
                    />
                </label>
                <button onClick={handleAddBookmark}>Add Bookmark</button>
            </div>
        </div>
    );
};

export default BookmarkModal;

BookmarkModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onAddBookmark: PropTypes.func.isRequired,
};
