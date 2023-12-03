import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: localStorage.getItem("theme") || "default",
    sidebarVisiblity: false,
};

const app = createSlice({
    name: "app",
    initialState,
    reducers: {
        _setTheme(state, action) {
            state.theme = action.payload;
            localStorage.setItem("theme", action.payload);
        },
        _setSidebarVisibility(state, action) {
            state.sidebarVisiblity = action.payload;
        },
    },
});

export const { _setTheme, _setSidebarVisibility } = app.actions;
export default app.reducer;
