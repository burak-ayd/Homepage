import { removeModal } from "~/stores/modal/actions";

export default function Header() {
    return (
        <div className="h-16 flex items-center justify-between p-3 border-b border-gray-400">
            <span>Ayarlar</span>
            <button
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-zinc-800/50 text-zinc-300 dark:text-zinc-500 dark:hover:bg-zinc-700/50 hover:bg-zinc-600 transition-colors"
                type="button"
                onClick={() => {
                    removeModal();
                }}
            >
                <span className="close-icon text-xl">X</span>
            </button>
        </div>
    );
}
