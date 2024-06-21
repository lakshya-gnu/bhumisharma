import { motion } from "framer-motion";

import { useMenuActive } from "@/lib/hooks/use-menu-active";

import styles from "./style.module.scss";

export const MenuBtn = () => {
    const { isMenuActive, setIsMenuActive } = useMenuActive();

    return (
        <div className={styles.button}>
            <motion.div
                className={styles.buttonSlider}
                animate={{ top: isMenuActive ? "-100%" : "0%" }}
                transition={{
                    duration: 0.5,
                    type: "tween",
                    ease: [0.76, 0, 0.24, 1],
                }}
            >
                <div
                    onClick={() => setIsMenuActive(!isMenuActive)}
                    className={styles.buttonEl}
                >
                    <PerspectiveText text="Menu" />
                </div>
                <div
                    onClick={() => setIsMenuActive(!isMenuActive)}
                    className={styles.buttonEl}
                >
                    <PerspectiveText text="Close" />
                </div>
            </motion.div>
        </div>
    );
};

function PerspectiveText({ text }: { text: string }) {
    return (
        <div className={styles.perspectiveText}>
            <p>{text}</p>
        </div>
    );
}
