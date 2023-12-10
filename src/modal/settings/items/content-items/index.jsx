import BackgroundContent from "./background";
import GeneralContent from "./general";
import SearhContent from "./search";
import WeatherContent from "./weather";

const contents = [
    {
        name: "general",
        companent: GeneralContent,
    },
    {
        name: "background",
        companent: BackgroundContent,
    },
    {
        name: "search",
        companent: SearhContent,
    },
    {
        name: "weather",
        companent: WeatherContent,
    },
];

export default contents;
