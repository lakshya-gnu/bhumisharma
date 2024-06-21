import React, { useCallback, useEffect, useRef } from "react";
import {
    EmblaCarouselType,
    EmblaEventType,
    EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./arrow-buttons";
import { DotButton, useDotButton } from "./dot-buttons";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const TWEEN_FACTOR_BASE = 0.2;

type PropType = {
    slides: Slide[];
    options?: EmblaOptionsType;
};

type Slide = {
    id: number;
    title: string;
    background: string;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const tweenFactor = useRef(0);
    const tweenNodes = useRef<HTMLElement[]>([]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector(
                ".embla__parallax__layer",
            ) as HTMLElement;
        });
    }, []);

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current =
            TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenParallax = useCallback(
        (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine();
            const scrollProgress = emblaApi.scrollProgress();
            const slidesInView = emblaApi.slidesInView();
            const isScrollEvent = eventName === "scroll";

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress;
                const slidesInSnap = engine.slideRegistry[snapIndex];

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex))
                        return;

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target();

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target);

                                if (sign === -1) {
                                    diffToTarget =
                                        scrollSnap - (1 + scrollProgress);
                                }
                                if (sign === 1) {
                                    diffToTarget =
                                        scrollSnap + (1 - scrollProgress);
                                }
                            }
                        });
                    }

                    const translate =
                        diffToTarget * (-1 * tweenFactor.current) * 100;
                    const tweenNode = tweenNodes.current[slideIndex];
                    tweenNode.style.transform = `translateX(${translate}%)`;
                });
            });
        },
        [],
    );

    useEffect(() => {
        if (!emblaApi) return;

        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        tweenParallax(emblaApi);

        emblaApi
            .on("reInit", setTweenNodes)
            .on("reInit", setTweenFactor)
            .on("reInit", tweenParallax)
            .on("scroll", tweenParallax)
            .on("slideFocus", tweenParallax);
    }, [emblaApi, tweenParallax]);

    return (
        <div className="m-auto max-w-[95vw] space-y-6 lg:max-w-[50vw]">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="ml-embla-container backface-hidden flex touch-pan-y touch-pinch-zoom">
                    {slides.map((slide: Slide, index) => (
                        <div
                            className="flex-embla-slide lg:pl-embla-slide min-w-0 rounded-2xl pl-[1rem]"
                            key={index}
                        >
                            <div className="h-full overflow-hidden">
                                <div className="embla__parallax__layer relative flex h-full w-full justify-center">
                                    <div
                                        className={cn(
                                            `h-[540px] w-[620px] bg-cover bg-center transition-all duration-100 ease-in hover:saturate-100`,
                                            index === selectedIndex
                                                ? "saturate-100"
                                                : "saturate-0",
                                        )}
                                    >
                                        <Image
                                            fill
                                            src={slide.background}
                                            alt="Slide-Image"
                                            className="pointer-events-none z-30 object-cover"
                                        />
                                        <div className="absolute bottom-6 left-6 z-50 flex h-full w-20 items-end lg:left-10">
                                            <div>
                                                <h1 className="font-montserrat pointer-events-none text-4xl font-bold text-white drop-shadow-2xl">
                                                    {slide.title}
                                                </h1>
                                                <Link
                                                    href={"/"}
                                                    className="ml-0.5 text-sm text-neutral-300 hover:underline"
                                                >
                                                    Watch Media
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto flex w-full flex-row items-center justify-center gap-2">
                {scrollSnaps.map((snap, index) => (
                    <div
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={cn(
                            "h-4 w-4 cursor-pointer rounded-full border-[2.5px] transition-colors duration-150 ease-in",
                            index === selectedIndex
                                ? "border-white bg-white"
                                : "border-neutral-700",
                        )}
                    />
                ))}
            </div>
        </div>
    );
};

export default EmblaCarousel;
