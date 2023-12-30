import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Input,
} from "@material-tailwind/react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useBackgroundImage } from "~/stores/app/hooks";
import { setBackgroundImage } from "~/stores/app/actions";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${
                id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}
export default function BackgroundContent() {
    const backgroundImage = useBackgroundImage();

    const [bgImage, setBgImage] = useState(backgroundImage);

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="flex flex-col items-center justify-center gap-y-5">
            <Accordion
                className="accordion"
                open={open === 1}
                icon={<Icon id={1} open={open} />}
            >
                <AccordionHeader
                    className="accordion-header text-white/90 hover:text-gray-600"
                    onClick={() => handleOpen(1)}
                >
                    Custom Background
                </AccordionHeader>
                <AccordionBody>
                    <div className="flex items-center justify-between w-full flex-shrink-0">
                        <span className="text-white shrink-0">
                            Resim Adresi
                        </span>
                        <div className="w-60">
                            <Input
                                type="text"
                                label="Add image Url"
                                value={bgImage && bgImage ? bgImage : ""}
                                color="white"
                                size="lg"
                                onChange={({ target }) => {
                                    setBgImage(target.value);
                                }}
                                onBlur={() => {
                                    setBackgroundImage(bgImage);
                                }}
                                onKeyDown={({ key }) => {
                                    if (key === "Enter") {
                                        setBackgroundImage(bgImage);
                                    }
                                }}
                                className="pr-16 w-60 text-white"
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            />
                        </div>
                    </div>
                </AccordionBody>
            </Accordion>
        </div>
    );
}

Icon.propTypes = {
    id: PropTypes.number.isRequired,
    open: PropTypes.number.isRequired,
};
