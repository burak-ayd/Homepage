import Header from "../../components/header";
import { useEffect } from "react";
import useColorScheme from "~/hooks/use-color-scheme";
import { useTheme } from "~/stores/app/hooks";
import { useModal } from "~/stores/modal/hooks";
import Modal from "~/modal";
import MainPanel from "~/components/mainPanel";
export default function Home() {
    const theme = useTheme();
    const { colorScheme } = useColorScheme();

    const modal = useModal();

    useEffect(() => {
        if (theme === "default") {
            document.body.className = colorScheme;
        } else {
            document.body.className = theme;
        }
    }, [theme, colorScheme]);
    return (
        <div>
            {modal && <Modal />}
            <Header />
            <MainPanel />
        </div>
    );
}
