import { Select, Option } from "@material-tailwind/react";
import { useSearchEngine } from "~/stores/app/hooks";
import { setSearchEngine } from "~/stores/app/actions";

import { useState } from "react";
export default function SearchContent() {
    // search engine with name and search url
    const searchEngine = [
        {
            id: 1,
            name: "google",
            value: "Google",
            url: "https://www.google.com/search?q=",
        },
        {
            id: 2,
            name: "bing",
            value: "Bing",
            url: "https://www.bing.com/search?q=",
        },
        {
            id: 3,
            name: "duckduckgo",
            value: "DuckDuckGo",
            url: "https://duckduckgo.com/?q=",
        },
    ];
    var engine;
    if (localStorage.getItem("searchEngine") === null) {
        // console.log("if");
        engine = searchEngine.find((x) => x.value === useSearchEngine().value);
    } else {
        // console.log("else");
        engine = JSON.parse(useSearchEngine());
    }

    // console.log("engine", engine);
    // console.log(
    //     "searchEngine",
    //     searchEngine.find((x) => x.name === engine.name)
    // );

    const [selectedEngine, setSelectedEngine] = useState(
        searchEngine.find((x) => x.name === engine.name)
    );
    const handleChange = (e) => {
        if (e.target) {
            const engine = searchEngine.find(
                (x) => x.value === e.target.innerText
            );
            setSelectedEngine(engine);
            setSearchEngine(engine);
        }
    };
    console.log("selectedEngine", selectedEngine);
    return (
        <>
            <div className="flex items-center justify-between w-full">
                <span className="text-white">Arama Motoru</span>
                <div>
                    <Select
                        label="Arama Motoru"
                        className=" text-white"
                        size="lg"
                        placeholder="Arama Motoru"
                        value={selectedEngine.value}
                    >
                        {searchEngine.map((x) => (
                            <Option
                                key={x.id}
                                value={x.name}
                                onClick={handleChange}
                                selected={selectedEngine.name === x.name}
                            >
                                {x.value}
                            </Option>
                        ))}
                    </Select>
                </div>
            </div>
        </>
    );
}
