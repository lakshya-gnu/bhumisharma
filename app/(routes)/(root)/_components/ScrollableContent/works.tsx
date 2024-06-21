import { EmblaOptionsType } from "embla-carousel";

import EmblaCarousel from "@/components/EmblaCarousel/embla-carousel";
import "@/components/EmblaCarousel/embla.css";

const slides = [
    {
        id: 1,
        title: "POSH Trainer",
        background: "/image-01.jpg",
    },
    { id: 2, title: "Social Entrepreneur", background: "/image-02.jpg" },
    { id: 3, title: "IC Member", background: "/image-03.jpg" },
    {
        id: 4,
        title: "Occult Science Practitioner",
        background: "/image-04.jpg",
    },
    { id: 5, title: "Self Defence Trainer", background: "/image-05.jpg" },
];

export const Works = () => {
    const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

    return (
        <div className="flex h-full items-center justify-center bg-neutral-950">
            <EmblaCarousel slides={slides} options={OPTIONS} />
        </div>
    );
};
