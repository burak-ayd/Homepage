import { configureStore } from "@reduxjs/toolkit";

// reducers
import app from "./app";
import weather from "./weather";
import modal from "./modal";

const store = configureStore({
    reducer: {
        app,
        weather,
        modal,
    },
});

export default store;
