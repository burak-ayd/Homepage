import store from "..";
import { _setTheme, _setSidebarVisibility } from ".";

export const setTheme = (theme) => store.dispatch(_setTheme(theme));
export const setSidebarVisibility = (visibility) =>
    store.dispatch(_setSidebarVisibility(visibility));
