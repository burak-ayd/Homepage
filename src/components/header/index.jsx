import Icons from "./icons";
import Search from "./search";
import Weather from "./miniWeather";
import classNames from "classnames";
export default function Header() {
    return (
        <header
            className={classNames(
                "flex items-center justify-between px-4 h-12 shrink-0 transition-colors w-full dark:text-white backdrop-blur z-10"
            )}
        >
            <Weather />
            <Search />
            <Icons />
        </header>
    );
}
