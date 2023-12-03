import ColorScheme from "./color-scheme";
import Settings from "./settings";

export default function Icons() {
    return (
        <div className="grid gap-y-1 gap-x-2 grid-cols-2 items-center justify-center">
            <ColorScheme />
            <Settings />
        </div>
    );
}
