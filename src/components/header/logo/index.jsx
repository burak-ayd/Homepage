import { FaReact } from "react-icons/fa";

export default function Logo() {
    return (
        <div className="logo flex justify-between items-center">
            <span className="logo-icon">
                <FaReact />
            </span>
            <span className="logo-text">React Bookmarks</span>
        </div>
    );
}
