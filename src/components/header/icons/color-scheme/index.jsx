import { Menu } from "@headlessui/react";
import useColorScheme from "~/hooks/use-color-scheme";
import {
    apperance,
    getApperanceIcon,
    getApperanceName,
} from "~/utils/consts/apperance";
import classNames from "classnames";

import { setTheme } from "~/stores/app/actions";
import { useTheme } from "~/stores/app/hooks";

export default function ColorScheme() {
    const theme = useTheme();
    const { colorScheme } = useColorScheme();
    return (
        <div className="">
            <Menu as="nav" className="relative">
                <Menu.Button className="h-10 rounded border w-full border-zinc-300 bg-zinc-50 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 gap-x-2 font-medium text-primary flex items-center justify-center text-sm">
                    <span className="text-black dark:text-white ">
                        {getApperanceIcon(theme, colorScheme)}
                    </span>
                    {getApperanceName(theme)}
                </Menu.Button>
                <Menu.Items
                    as="div"
                    className="absolute z-50 top-full w-24 right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-4"
                >
                    {apperance.map(({ key, value }, index) => (
                        <Menu.Item key={index}>
                            {({ active }) => (
                                <button
                                    onClick={() => {
                                        setTheme(key);
                                    }}
                                    className={classNames(
                                        "h-9 px-3 flex items-center text-zinc-600 dark:text-white/80 gap-x-2.5 text-sm font-medium",
                                        {
                                            "bg-zinc-700 !text-white": active,
                                            "bg-blue-50 dark:bg-primary text-blue-600 dark:text-white w-full":
                                                key === theme,
                                        }
                                    )}
                                    href=""
                                >
                                    <span
                                        className={classNames({
                                            "!text-white": active,
                                            "text-black dark:text-white":
                                                !active,
                                            "text-blue-800 dark:text-white":
                                                key === theme,
                                        })}
                                    >
                                        {getApperanceIcon(key)}
                                    </span>
                                    {value}
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Menu>
        </div>
    );
}
