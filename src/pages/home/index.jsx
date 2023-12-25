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
        console.log("theme", theme);
        console.log("colorScheme", colorScheme);
        console.log("backgroundImage", backgroundImage);
        if (backgroundImage) {
            document.body.style.backgroundImage = `url(${backgroundImage})`;
            document.body.className = "background";
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
        <div className="Home background:bg-blue-gray-50/20">
            {modal && <Modal />}
            <Header />
            <MainPanel />
        </div>
    );
}
