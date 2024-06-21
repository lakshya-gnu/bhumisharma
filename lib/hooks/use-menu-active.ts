import { create } from "zustand";

type State = {
    isMenuActive: boolean;
};

type Action = {
    openMenu: () => void;
    closeMenu: () => void;
    setIsMenuActive: (state: boolean) => void;
};

export type UseMenuActiveType = State & Action;

export const useMenuActive = create<UseMenuActiveType>((set) => ({
    isMenuActive: false,
    openMenu: () => set({ isMenuActive: true }),
    closeMenu: () => set({ isMenuActive: false }),
    setIsMenuActive: (state) => set({ isMenuActive: state }),
}));
