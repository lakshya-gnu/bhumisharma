export const desktopVariants = {
    initial: {
        width: "100vw",
        height: "100vh",
        transition: {
            duration: 1.75,
            type: "tween",
            ease: [1.26, 0.75, 0.34, 1],
        },
    },
    normal: {
        width: "50vw",
        height: "100vh",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
};

export const mobileVariants = {
    initial: {
        width: "100vw",
        height: "0vh",
        transition: {
            duration: 1.75,
            type: "tween",
            ease: [1.26, 0.75, 0.34, 1],
        },
    },
    normal: {
        width: "100vw",
        height: "100vh",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
};

export const contentVariants = {
    initial: {
        opacity: 0,
        transition: {
            duration: 1.75,
            type: "tween",
            ease: [1.26, 0.75, 0.34, 1],
        },
    },
    normal: {
        opacity: 1,
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
};
