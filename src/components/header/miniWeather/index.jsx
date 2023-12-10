import axios from "axios";
import { useEffect } from "react";
import { useCity, useUnits, useLang, useWeather } from "~/stores/weather/hooks";
import { setWeather } from "~/stores/weather/actions";
import dayjs from "dayjs";
import { func } from "prop-types";

export default function Weather() {
    const City = useCity();
    const Units = useUnits();
    const Lang = useLang();
    const getWeatherData = useWeather();

    var Lon = 0;
    var Lat = 0;

    const ApiKEY = import.meta.env.VITE_WEATHER_API_KEY;
    // 5 günlük hava durumu
    // const ApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${ApiKEY}`;

    // Şu anki hava durumu
    const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${ApiKEY}&units=${Units}&lang=${Lang}`;

    const getGeoLocation = async () => {
        await axios
            .get(
                `http://api.openweathermap.org/geo/1.0/direct?q=${City}&limit=5&appid=${ApiKEY}`
            )
            .then((res) => {
                Lon = res.data[0].lon;
                Lat = res.data[0].lat;
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // const getWeather = async () => {
    //     console.log("getWeather");
    //     await axios
    //         .get(ApiUrl)
    //         .then((res) => {
    //             var date = dayjs(res.data.dt * 1000).format("DD.MM.YYYY HH:MM");
    //             const weather = {
    //                 city: res.data.name,
    //                 country: res.data.sys.country,
    //                 temp: Math.round(res.data.main.temp),
    //                 feels_like: Math.round(res.data.main.feels_like),
    //                 humidity: res.data.main.humidity,
    //                 wind: res.data.wind.speed,
    //                 description: res.data.weather[0].description,
    //                 icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`,
    //                 date: date,
    //             };
    //             setWeather(weather);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    async function getWeather() {
        console.log("getWeather");
        await axios
            .get(ApiUrl)
            .then((res) => {
                var date = dayjs(res.data.dt * 1000).format("DD.MM.YYYY HH:MM");
                const weather = {
                    city: res.data.name,
                    country: res.data.sys.country,
                    temp: Math.round(res.data.main.temp),
                    feels_like: Math.round(res.data.main.feels_like),
                    humidity: res.data.main.humidity,
                    wind: res.data.wind.speed,
                    description: res.data.weather[0].description,
                    icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`,
                    date: date,
                };
                setWeather(weather);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getGeoLocation(); // Bu satırı isteğe bağlı olarak kullanabilirsiniz
        getWeather();
    }, []);

    return (
        <>
            {getWeatherData && (
                <div className="flex justify-between items-center gap-1.5">
                    <img
                        className="w-full h-full object-cover"
                        src={getWeatherData.icon}
                        alt={getWeatherData.description}
                    />
                    <span>{getWeatherData.temp}</span>
                    <span className="font-semibold">{getWeatherData.city}</span>
                </div>
            )}
        </>
    );
}
