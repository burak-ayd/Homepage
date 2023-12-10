import { Input, Button } from "@material-tailwind/react";
import { GoSearch } from "react-icons/go";
import { useState } from "react";

export default function Search() {
    const [searchContent, setSearchContent] = useState("");
    const onChange = ({ target }) => {
        setSearchContent(target.value);
    };
    return (
        <div className="relative flex max-w-[600px] w-full items-center justify-center p-0">
            {/* <input
                type="text"
                className="w-full h-10 rounded bg-white/40 dark:bg-zinc-700/50 border border-zinc-300 dark:border-zinc-700 focus:border-zinc-500 dark:focus:border-zinc-500 dark:text-white backdrop-blur px-4 outline-none text-sm font-semibold"
                placeholder="Ara"
            /> */}
            <Input
                type="text"
                label="Ara"
                value={searchContent}
                onChange={onChange}
                className="pr-16"
                containerProps={{
                    className: "min-w-0",
                }}
            />
            <Button
                size="sm"
                color={searchContent ? "gray" : "blue-gray"}
                className="!absolute right-1 top-1 rounded justify-center"
                onClick={() => {
                    (window.location.href = `https://www.google.com/search?q=${searchContent}`),
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
