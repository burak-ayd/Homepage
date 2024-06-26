import Header from "../../components/header";
import { useEffect } from "react";
import useColorScheme from "~/hooks/use-color-scheme";
import { useTheme } from "~/stores/app/hooks";
import { useBackgroundImage } from "~/stores/app/hooks";
import { useModal } from "~/stores/modal/hooks";
import Modal from "~/modal";
import MainPanel from "~/components/mainPanel";

export default function Home() {
    const theme = useTheme();
    const backgroundImage = useBackgroundImage();
    const { colorScheme } = useColorScheme();

    const modal = useModal();

    useEffect(() => {
        if (backgroundImage) {
            document.body.style.backgroundImage = `url(${backgroundImage})`;
            document.body.className = "background bg-cover bg-center";
        } else {
            document.body.style.backgroundImage = "";
            if (theme === "default") {
                document.body.className = colorScheme;
            } else {
                document.body.className = theme;
            }
        }
    }, [theme, colorScheme, backgroundImage]);
    return (
        <div className="Home">
            {modal && <Modal />}
            <Header />
            <MainPanel />
        </div>
    );
}
