import { AnimatePresence, motion } from "framer-motion";

import { useMenuActive } from "@/lib/hooks/use-menu-active";

import { Nav } from "./nav";
import { header, menu } from "./animation";
import { MenuBtn } from "./menu-btn";

import styles from "./style.module.scss";

export const Menu = () => {
    const { isMenuActive, setIsMenuActive } = useMenuActive();

    return (
        <motion.header
            variants={header}
            initial="initial"
            animate="normal"
            className={styles.header}
        >
            <motion.div
                variants={menu}
                initial="closed"
                animate={isMenuActive ? "open" : "closed"}
                className={styles.menu}
            >
                <AnimatePresence>{isMenuActive && <Nav />}</AnimatePresence>
            </motion.div>
            <MenuBtn />
        </motion.header>
    );
};
