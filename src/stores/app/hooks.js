import { useSelector } from "react-redux";

export const useTheme = () => useSelector((state) => state.app.theme);
export const useSidebarVisibility = () =>
    useSelector((state) => state.app.sidebarVisibility);
