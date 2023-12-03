import ColorScheme from "./color-scheme";
import Logo from "./logo";
import Search from "./search";
import Settings from "./settings";

export default function Header() {
    return (
        <header className="h-14 m-2 border-b border-zinc-800">
            <div className="header-content flex justify-between pt-1">
                <Logo />
                <Search />
                <div className=" flex items-center justify-between w-12">
                    <ColorScheme />
                    <Settings />
                </div>
            </div>
        </header>
    );
}
