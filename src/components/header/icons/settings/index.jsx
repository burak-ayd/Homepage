import { IoSettingsOutline } from "react-icons/io5";
import { setModal } from "~/stores/modal/actions";

export default function Settings() {
    return (
        <div className="settings">
            <button
                className="flex items-center justify-center w-full h-9 rounded-full bg-white dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-500 dark:hover:bg-zinc-700/50 hover:bg-zinc-200 transition-colors"
                type="button"
                onClick={() => {
                    setModal("settings");
                }}
            >
                <span className="settings-icon">
                    <IoSettingsOutline size={24} />
                </span>
            </button>
        </div>
    );
}
