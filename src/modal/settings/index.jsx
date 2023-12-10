import Header from "./items/header";
import Content from "./items/content";
import Sidebar from "./items/sidebar";

export default function SettingsModal() {
    return (
        <div className="w-[600px] text-white">
            <Header />
            <main className="flex">
                <Sidebar />
                <div className="p-4 w-full">
                    <Content />
                </div>
            </main>
        </div>
    );
}
