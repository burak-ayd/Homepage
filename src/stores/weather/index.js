import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    city: localStorage.getItem("WeatherCity") || "Ankara",
    units: localStorage.getItem("WeatherUnits") || "metric",
    lang: localStorage.getItem("WeatherLang") || "tr",
    weather: JSON.parse(localStorage.getItem("Weather")) || {},
};

const weather = createSlice({
    name: "weather",
    initialState,
    reducers: {
        _setCity(state, action) {
            state.city = action.payload;
            localStorage.setItem("city", action.payload);
        },
        _setUnits(state, action) {
            state.units = action.payload;
            localStorage.setItem("WeatherUnits", action.payload);
        },
        _setLang(state, action) {
            state.lang = action.payload;
            localStorage.setItem("WeatherLang", action.payload);
        },
        _setWeather(state, action) {
            state.weather = action.payload;
            localStorage.setItem("Weather", JSON.stringify(action.payload));
        },
    },
});

export const { _setCity, _setUnits, _setLang, _setWeather } = weather.actions;
export default weather.reducer;
