import { useTheme, useLanguage } from "~/stores/app/hooks";
import { setTheme, setLanguage } from "~/stores/app/actions";
import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

export default function GeneralContent() {
    const theme = useTheme();
    const language = useLanguage();

    const languages = [
        { id: 1, name: "tr", value: "Türkçe" },
        { id: 2, name: "en", value: "English" },
    ];

    const [selectedLanguage, setSelectedLanguage] = useState(
        languages.find((x) => x.name === language)
    );

    const [selectedTheme, setSelectedTheme] = useState(
        theme === "default"
            ? "Sistem Teması"
            : theme === "light"
            ? "Açık Tema"
            : "Koyu Tema"
    );

    return (
        <div className="flex flex-col items-center justify-center gap-y-5">
            <div className="flex items-center justify-between w-full">
                <span className="text-white">Tema Seçimi</span>
                <div className="text-white">
                    <Select
                        size="lg"
                        label="Tema Seçimi "
                        className="text-white"
                        value={selectedTheme}
                    >
                        <Option
                            value="Sistem Teması"
                            onClick={() => setTheme("default")}
                        >
                            Sistem Teması
                        </Option>
                        <Option
                            value="Açık Tema"
                            onClick={() => setTheme("light")}
                        >
                            Açık Tema
                        </Option>
                        <Option
                            value="Koyu Tema"
                            onClick={() => setTheme("dark")}
                        >
                            Koyu Tema
                        </Option>
                    </Select>
                </div>
            </div>
            <div className="flex items-center justify-between w-full">
                <span className="text-white">Dil Seçimi</span>
                <div>
                    <Select
                        label="Dil Seçimi"
                        className=" text-white"
                        size="lg"
                        value={selectedLanguage.value}
                    >
                        {languages.map((x) => (
                            <Option
                                key={x.id}
                                value={x.name}
                                onClick={() => {
                                    setSelectedLanguage(x);
                                    setLanguage(x.name);
                                }}
                                selected={selectedLanguage.name === x.name}
                            >
                                {x.value}
                            </Option>
                        ))}
                    </Select>
                </div>
            </div>
        </div>
    );
}
