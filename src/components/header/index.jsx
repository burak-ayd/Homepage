import Icons from "./icons";
import Logo from "./logo";
import Search from "./search";
import classNames from "classnames";
export default function Header() {
    return (
        <header
            className={classNames(
                "h-14 dark:bg-zinc-900/70 dark:border-zinc-700 transition-colors border-b border-zinc-200 w-full bg-white/70 backdrop-blur z-10"
            )}
        >
            <div className="header-content flex items-center justify-between pt-1">
                <Logo />
                <Search />
                <Icons />
            </div>
        </header>
    );
}
