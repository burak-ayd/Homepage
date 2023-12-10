import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: localStorage.getItem("theme") || "default",
    sidebarVisiblity: false,
    language: "tr",
    settingPage: "general",
};

const app = createSlice({
    name: "app",
    initialState,
    reducers: {
        _setTheme(state, action) {
            state.theme = action.payload;
            localStorage.setItem("theme", action.payload);
        },
        _setLanguage(state, action) {
            state.language = action.payload;
            localStorage.setItem("lang", action.payload);
        },
        _setSidebarVisibility(state, action) {
            state.sidebarVisiblity = action.payload;
        },
        _setSettingPage(state, action) {
            state.settingPage = action.payload;
        },
    },
});

export const {
    _setTheme,
    _setLanguage,
    _setSidebarVisibility,
    _setSettingPage,
} = app.actions;
export default app.reducer;
