import { Input, Button } from "@material-tailwind/react";
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import { useSearchEngine } from "~/stores/app/hooks";

export default function Search() {
    const getSearchEngine = useSearchEngine();

    var engine;
    if (localStorage.getItem("searchEngine") === null) {
        engine = {
            id: 4,
            name: "google",
            value: "Google",
            url: "https://www.google.com/search?q=",
        };
    } else {
        engine = JSON.parse(getSearchEngine);
    }

    const [searchContent, setSearchContent] = useState("");
    const onChange = ({ target }) => {
        setSearchContent(target.value);
    };
    return (
        <div className="relative flex max-w-[600px] w-full items-center justify-center">
            {/* <input
                type="text"
                className="w-full h-10 rounded bg-white/40 dark:bg-zinc-700/50 border border-zinc-300 dark:border-zinc-700 focus:border-zinc-500 dark:focus:border-zinc-500 dark:text-white backdrop-blur px-4 outline-none text-sm font-semibold"
                placeholder="Ara"
            /> */}
            <Input
                type="text"
                label="Ara"
                onChange={onChange}
                value={searchContent}
                color="white"
                className="pr-16 dark:text-white"
                containerProps={{
                    className: "min-w-0",
                }}
            />
            <Button
                size="sm"
                color={searchContent ? "gray" : "blue-gray"}
                className="!absolute right-1 top-1 rounded justify-center dark:bg-zinc-700"
                onClick={() => {
                    (window.location.href = `${engine.url}${searchContent}`),
                        "_blank";
                }}
            >
                <i className="text-base font-bold">
                    <GoSearch />
                </i>
            </Button>
        </div>
    );
}
