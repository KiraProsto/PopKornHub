import { create } from "zustand";
import type { Movie } from "../types/Movie";

interface IFavoritesStore{
    favorites: Movie[];
    loadFavorites: () => void;
    addFavorites: (movie: Movie) => void;
    removeFavorites: (id: number) => void;
}

export const useFavoritesStore = create<IFavoritesStore>((set) => ({
    favorites: [],
    loadFavorites: () => {
        const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
        set({ favorites: stored });
    },

    addFavorites: (movie) =>
        set((state) => {
            const updated = [...state.favorites, movie];
            localStorage.setItem("favorites", JSON.stringify(updated));
            return { favorites: updated };
        }),
    
    removeFavorites: (id) =>
        set((state) => {
            const updated = state.favorites.filter((m) => m.id !== id);
            localStorage.setItem("favorites", JSON.stringify(updated));
            return { favorites: updated };
        }),
}))