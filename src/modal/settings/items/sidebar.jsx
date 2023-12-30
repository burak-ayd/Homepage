import { setSettingPage } from "~/stores/app/actions";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaImages } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import classNames from "classnames";
export default function Sidebar() {
    const [topPos, setTopPos] = useState(12);
    const [activePage, setActivePage] = useState(0);

    return (
        <div className="relative flex flex-col items-start justify-start border-r border-gray-400 w-48 py-3 pl-3 shrink-0">
            <div
                className={`absolute bg-[#aa1cfc] transition-colors right-0 w-1 h-12`}
                style={{ top: `${topPos}px` }}
            />
            <button
                className={classNames(
                    "flex items-center justify-start w-full h-12 px-3 text-left text-sm text-gray-500 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200",
                    activePage === 0 ? "bg-white/20 " : "bg-none"
                )}
                type="button"
                onClick={() => {
                    setSettingPage("general");
                    setTopPos(12);
                    setActivePage(0);
                }}
            >
                <div className="flex items-center justify-between">
                    <span className="settings-icon text-xl">
                        <IoSettingsOutline size={26} />
                    </span>
                    <span className="ml-2">Genel</span>
                </div>
            </button>
            <button
                className={classNames(
                    "flex items-center justify-start w-full h-12 px-3 text-left text-sm text-gray-500 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200",
                    activePage === 1 ? "bg-white/20 rounded-md" : "bg-none"
                )}
                type="button"
                onClick={() => {
                    setSettingPage("weather");
                    setTopPos(60);
                    setActivePage(1);
                }}
            >
                <div className="flex items-center justify-between">
                    <span className="settings-icon text-xl">
                        <TiWeatherPartlySunny size={26} />
                    </span>
                    <span className="ml-2">Hava Durumu</span>
                </div>
            </button>
            <button
                className={classNames(
                    "flex items-center justify-start w-full h-12 px-3 text-left text-sm text-gray-500 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200",
                    activePage === 2 ? "bg-white/20 rounded-md" : "bg-none"
                )}
                type="button"
                onClick={() => {
                    setSettingPage("search");
                    setTopPos(108);
                    setActivePage(2);
                }}
            >
                <div className="flex items-center justify-between">
                    <span className="settings-icon text-xl">
                        <GoSearch size={26} />
                    </span>
                    <span className="ml-2">Arama Motoru</span>
                </div>
            </button>
            <button
                className={classNames(
                    "flex items-center justify-start w-full h-12 px-3 text-left text-sm text-gray-500 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200",
                    activePage === 3 ? "bg-white/20 rounded-md" : "bg-none"
                )}
                type="button"
                onClick={() => {
                    setSettingPage("background");
                    setTopPos(156);
                    setActivePage(3);
                }}
            >
                <div className="flex items-center justify-between">
                    <span className="settings-icon text-xl">
                        <FaImages size={26} />
                    </span>
                    <span className="ml-2">Arka Plan</span>
                </div>
            </button>
        </div>
    );
}
