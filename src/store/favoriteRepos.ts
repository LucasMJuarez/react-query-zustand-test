import { create } from "zustand";

type favoriteReposState = {
    favoriteReposIds: number[];
    addFavoritesRepo: (id: number) => void;
    removeFavoritesRepo: (id: number) => void;
};

export const useFavoriteReposStore = create<favoriteReposState>(() => ({
    favoriteReposIds: [],
    addFavoritesRepo: (id: number) => {},
    removeFavoritesRepo: (id: number) => {}
}));