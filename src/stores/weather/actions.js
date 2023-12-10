import store from "..";
import { _setCity, _setUnits, _setLang, _setWeather } from ".";

export const setCity = (city) => store.dispatch(_setCity(city));
export const setUnits = (units) => store.dispatch(_setUnits(units));
export const setLang = (lang) => store.dispatch(_setLang(lang));
export const setWeather = (weather) => store.dispatch(_setWeather(weather));
