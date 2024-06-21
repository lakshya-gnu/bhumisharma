export const menu = {
    open: {
        width: "360px",
        height: "500px",
        top: "-35px",
        left: "-35px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        left: "0px",
        transition: {
            duration: 0.75,
            delay: 0.2,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
        },
    },
};

export const header = {
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
