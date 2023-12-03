import Header from "../../components/header";
import { useEffect } from "react";
import useColorScheme from "~/hooks/use-color-scheme";
import { useTheme } from "~/stores/app/hooks";
export default function Home() {
    const theme = useTheme();
    const { colorScheme } = useColorScheme();

    useEffect(() => {
        if (theme === "default") {
            document.body.className = colorScheme;
        } else {
            document.body.className = theme;
        }
    }, [theme, colorScheme]);
    return (
        <div >
            <Header />
        </div>
    );
}
