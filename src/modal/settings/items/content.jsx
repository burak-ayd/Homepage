import { useSettingPage } from "~/stores/app/hooks";
import contents from "./content-items";

export default function Content() {
    const page = useSettingPage();

    const currentContent = contents.find((m) => m.name === page);

    return <div>{currentContent && <currentContent.companent />}</div>;
}
