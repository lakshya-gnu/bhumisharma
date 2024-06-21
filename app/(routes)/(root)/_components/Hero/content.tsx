import { cn } from "@/lib/utils";

import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

import { Menu } from "./Menu/menu";
import Link from "next/link";
import { motion } from "framer-motion";
import { contentVariants } from "./animation";

export const Content = () => {
    return (
        <motion.div
            variants={contentVariants}
            initial="initial"
            animate="normal"
            className="mx-8 flex min-h-screen flex-col items-start justify-center lg:mx-16"
        >
            <div className="flex h-full flex-col justify-between space-y-20">
                <Menu />
                <Main />
            </div>
        </motion.div>
    );
};

export const Main = () => {
    return (
        <div className="mx-auto flex h-[70vh] w-full max-w-[85vw] items-center justify-center text-cyan-50 lg:items-start">
            <div className="flex h-full w-full flex-col items-center justify-between text-center lg:items-start lg:text-start">
                <HeroContent />
                <HeroFooter />
            </div>
        </div>
    );
};

const HeroContent = () => {
    return (
        <div className="flex h-full w-full flex-col space-y-6 lg:items-start lg:justify-start lg:text-start">
            <HeroTitle />
            <HeroDescription />
            <WorkTogetherBtn />
        </div>
    );
};

const HeroTitle = () => {
    return (
        <h3 className="font-montserrat text-5xl font-bold lg:tracking-tight">
            Hello, I&apos;m a passionate professional&nbsp;
            <span className="to-chartreuse-yellow from-electric-lime inline-block bg-gradient-to-r bg-clip-text text-transparent">
                social worker
            </span>
        </h3>
    );
};

const HeroDescription = () => {
    return (
        <p className="font-nunito text-lg font-medium">
            My name is Bhumi Sharma. I excel in administrative work, bringing a
            unique blend of skills to drive impactful change in the community,
            infused with a holistic approach from my belief and practice in
            occult science, enhancing both personal and professional growth.
        </p>
    );
};

const WorkTogetherBtn = () => {
    return (
        <div>
            <AnimatedGradientText className="">
                <span
                    className={cn(
                        `animate-gradient font-raleway from-electric-lime via-ufo-green to-chartreuse-yellow z-40 inline bg-gradient-to-r bg-[length:var(--bg-size)_100%] bg-clip-text text-lg font-bold text-transparent transition-colors duration-500 ease-in-out group-hover:text-blue-950`,
                    )}
                >
                    Let&apos;s Work Together!
                </span>
            </AnimatedGradientText>
        </div>
    );
};

const HeroFooter = () => {
    return (
        <div className="text-neutral-200 [&>a]:text-cyan-50 [&>a]:underline-offset-1 [&>a]:[&>p]:underline">
            <p>
                Find me at <Link href={"/"}>LinkedIn</Link>,{" "}
                <Link href={"/"}>Instagram</Link> or email me at{" "}
                <Link href={"/"}>sbhumi294@gmail.com</Link>
            </p>
            <p>
                Download&nbsp;
                <Link
                    href={"./BhumiSharmaCV.pdf"}
                    target="_blank"
                    className="underline underline-offset-2"
                    download="./BhumiSharmaCV.pdf"
                >
                    my CV
                </Link>
                &nbsp;(PDF 34KB)
            </p>
        </div>
    );
};
