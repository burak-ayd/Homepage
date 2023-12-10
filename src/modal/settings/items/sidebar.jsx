import { setSettingPage } from "~/stores/app/actions";

export default function Sidebar() {
    return (
        <div className="flex flex-col items-start justify-center border-r border-gray-400 w-48 p-3 shrink-0">
            <button
                className="flex items-center justify-start w-full h-12 px-3 text-left text-sm text-gray-500 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200"
                type="button"
                onClick={() => {
                    setSettingPage("general");
                }}
            >
                <span className="settings-icon text-xl">🔍</span>
                <span className="ml-2">Genel</span>
            </button>
            <button
                className="flex items-center justify-start w-full h-12 px-3 text-left text-sm text-gray-500 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200"
                type="button"
                onClick={() => {
                    setSettingPage("weather");
                }}
            >
                <span className="settings-icon text-xl">🔔</span>
                <span className="ml-2">Hava Durumu</span>
            </button>
            <button
                className="flex items-center justify-start w-full h-12 px-3 text-left text-sm text-gray-500 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200"
                type="button"
                onClick={() => {
                    setSettingPage("search");
                }}
            >
                <span className="settings-icon text-xl">📧</span>
                <span className="ml-2">Arama</span>
            </button>
            <button
                className="flex items-center justify-start w-full h-12 px-3 text-left text-sm text-gray-500 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200"
                type="button"
                onClick={() => {
                    setSettingPage("background");
                }}
            >
                <span className="settings-icon text-xl">📦</span>
                <span className="ml-2">Arka Plan</span>
            </button>
        </div>
    );
}
