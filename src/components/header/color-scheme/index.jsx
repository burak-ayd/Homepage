import { Menu } from "@headlessui/react";
import useColorScheme from "~/hooks/use-color-scheme";
import {
    apperance,
    getApperanceIcon,
    getApperanceName,
    getLanguageName,
    languages,
} from "~/utils/consts/apperance";
import classNames from "classnames";

export default function ColorScheme() {
    const { colorScheme } = useColorScheme();
    return (
        // <div className="theme flex justify-between items-center ">
        //     <span className="theme-icon">
        //         <BsDisplay />
        //     </span>
        //     <span className="theme-icon">
        //         <FiSun />
        //     </span>
        //     <span className="theme-icon">
        //         <BsMoonStarsFill />
        //     </span>
        // </div>
        <div className="mt-auto grid gap-y-1 gap-x-2">
            <Menu as="nav" className="relative">
                <Menu.Button className="h-10 rounded w-full text-zinc-600 bg-zinc-50 dark:bg-zinc-800 dark:text-white gap-x-2.5 font-medium text-primary flex items-center justify-center text-sm">
                    <span className="text-black dark:text-white">
                        {getApperanceIcon("default", colorScheme)}
                    </span>
                    {/* {getApperanceName("default")} */}
                </Menu.Button>
                <Menu.Items
                    as="div"
                    className="absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-4"
                >
                    {apperance.map(({ key, value }, index) => (
                        <Menu.Item key={index}>
                            {({ active }) => (
                                <button
                                    onClick={() => {}}
                                    className={classNames(
                                        "h-9 px-3 flex items-center text-zinc-600 dark:text-white/80 gap-x-2.5 text-sm font-medium",
                                        {
                                            "bg-zinc-700 !text-white": active,
                                            "bg-blue-50 dark:bg-primary text-blue-600 dark:text-white":
                                                key === "dark",
                                        }
                                    )}
                                >
                                    <span
                                        className={classNames({
                                            "!text-white": active,
                                            "text-black dark:text-white":
                                                !active,
                                            "text-blue-800 dark:text-white":
                                                key === "dark",
                                        })}
                                    >
                                        {getApperanceIcon(key)}
                                    </span>
                                    {getApperanceName(key)}
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Menu>
        </div>
    );
}
