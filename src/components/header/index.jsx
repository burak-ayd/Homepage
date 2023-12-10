import Icons from "./icons";
import Search from "./search";
import Weather from "./miniWeather";
import classNames from "classnames";
export default function Header() {
    return (
        <header
            className={classNames(
                "flex items-center justify-between p-2 h-14 dark:bg-zinc-900/70 dark:border-zinc-700 transition-colors border-b border-zinc-200 w-full bg-white/70 backdrop-blur z-10"
            )}
        >
            <Weather />
            <Search />
            <Icons />
        </header>
    );
}
