import { useMediaQuery } from "usehooks-ts";
import { create } from "zustand";

type State = {
    isDesktop: boolean;
};

type Action = {
    setIsDesktop: (state: boolean) => void;
};

type UseIsDesktopType = State & Action;

export const useIsDesktop = create<UseIsDesktopType>((set) => ({
    isDesktop: false,
    setIsDesktop: (state) => set({ isDesktop: state }),
}));
