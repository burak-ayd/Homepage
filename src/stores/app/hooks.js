import { useSelector } from "react-redux";

export const useTheme = () => useSelector((state) => state.app.theme);
export const useLanguage = () => useSelector((state) => state.app.language);
export const useSettingPage = () =>
    useSelector((state) => state.app.settingPage);
export const useSidebarVisibility = () =>
    useSelector((state) => state.app.sidebarVisibility);
export const useSearchEngine = () =>
    useSelector((state) => state.app.searchEngine);
export const useBackgroundImage = () =>
    useSelector((state) => state.app.background_image);
export const useSetEdit = () => useSelector((state) => state.app.setEdit);
