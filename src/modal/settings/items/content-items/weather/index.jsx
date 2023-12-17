import {
    useCity,
    useUnits,
    useLang,
    useForecast,
} from "~/stores/weather/hooks";
import {
    setCity,
    setLang,
    setUnits,
    setForecast,
} from "~/stores/weather/actions";
import { Select, Option, Input } from "@material-tailwind/react";
import { useState } from "react";
export default function WeatherContent() {
    const City = useCity();
    const Units = useUnits();
    const Lang = useLang();
    const Forecast = useForecast();

    const languages = [
        { id: 1, name: "tr", value: "Türkçe" },
        { id: 2, name: "en", value: "English" },
    ];

    const units = [
        { id: 1, name: "metric", value: "Metric" },
        { id: 2, name: "imperial", value: "Imperial" },
    ];

    const forecast = [
        { id: 1, name: "true", value: "Evet" },
        { id: 2, name: "false", value: "Hayır" },
    ];

    const [selectedLang, setSelectedLang] = useState(
        languages.find((x) => x.name === Lang)
    );

    const [selectedUnits, setSelectedUnits] = useState(
        units.find((x) => x.name === Units)
    );

    const [cityName, setCityName] = useState(City);

    const [selectedForecast, setSelectedForecast] = useState(
        forecast.find((x) => x.name === Forecast)
    );

    // console.log("selectedForecast", selectedForecast);

    const handleChangeLang = (e) => {
        if (e.target) {
            const lang = languages.find((x) => x.value === e.target.innerText);
            setSelectedLang(lang);
            setLang(lang.name);
        }
    };

    const handleChangeUnits = (e) => {
        console.log(e.target.innerText);
        if (e.target) {
            const unit = units.find((x) => x.value === e.target.innerText);
            setSelectedUnits(unit);
            setUnits(unit.name);
        }
    };

    const handleChangeForecast = (e) => {
        if (e.target) {
            const forecasts = forecast.find(
                (x) => x.value === e.target.innerText
            );
            setSelectedForecast(forecasts);
            setForecast(forecasts.name);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-y-5">
                <div className="flex items-center justify-between w-full flex-shrink-0">
                    <span className="text-white shrink-0">
                        Hava Durumu Şehri
                    </span>
                    <div className="w-60">
                        <Input
                            type="text"
                            label="Hava Durumu Şehri"
                            value={cityName}
                            color="white"
                            size="lg"
                            onChange={({ target }) => {
                                setCityName(target.value);
                            }}
                            onBlur={() => {
                                setCity(cityName);
                            }}
                            onKeyDown={({ key }) => {
                                if (key === "Enter") {
                                    setCity(cityName);
                                }
                            }}
                            className="pr-16 w-60 text-white"
                            containerProps={{
                                className: "min-w-0",
                            }}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between w-full">
                    <span className="text-white">Hava Durumu Dili</span>
                    <div>
                        <Select
                            label="Dil"
                            className=" text-white w-60"
                            size="lg"
                            value={selectedLang.value}
                        >
                            {languages.map((x) => (
                                <Option
                                    key={x.id}
                                    value={x.name}
                                    onClick={handleChangeLang}
                                    selected={selectedLang.name === x.name}
                                >
                                    {x.value}
                                </Option>
                            ))}
                        </Select>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full">
                    <span className="text-white">Hava Durumu Birimi</span>
                    <div>
                        <Select
                            label="Birim"
                            className=" text-white w-60"
                            size="lg"
                            value={selectedUnits.value}
                        >
                            {units.map((x) => (
                                <Option
                                    key={x.id}
                                    value={x.name}
                                    onClick={handleChangeUnits}
                                    selected={selectedUnits.name === x.name}
                                >
                                    {x.value}
                                </Option>
                            ))}
                        </Select>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full">
                    <span className="text-white">5 Günlük Hava Tahmini</span>
                    <div>
                        <Select
                            label="Birim"
                            className=" text-white w-60"
                            size="lg"
                            value={selectedForecast.value}
                        >
                            {forecast.map((x) => (
                                <Option
                                    key={x.id}
                                    value={x.name}
                                    onClick={handleChangeForecast}
                                    selected={selectedForecast.name === x.name}
                                >
                                    {x.value}
                                </Option>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>
        </>
    );
}
