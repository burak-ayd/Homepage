import { useSelector } from "react-redux";

export const useTheme = () => useSelector((state) => state.app.theme);
export const useLanguage = () => useSelector((state) => state.app.language);
export const useSettingPage = () =>
    useSelector((state) => state.app.settingPage);
export const useSidebarVisibility = () =>
    useSelector((state) => state.app.sidebarVisibility);
