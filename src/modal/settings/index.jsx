import Header from "./items/header";
import Content from "./items/content";
import Sidebar from "./items/sidebar";

export default function SettingsModal() {
    return (
        <div className="modal-content text-white h-[calc(100%-64px)] w-full ">
            <Header />
            <main className="flex h-full">
                <Sidebar />
                <div className="p-4 w-full">
                    <Content />
                </div>
            </main>
        </div>
    );
}
