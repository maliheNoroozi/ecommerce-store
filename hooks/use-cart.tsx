"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/types";
import toast from "react-hot-toast";

interface CartStore {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  removeAllItems: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (item: Product) => {
        const existingItem = get().items.find(
          (element) => element.id === item.id
        );
        if (existingItem) {
          return toast("Item already in the cart.");
        }
        set({ items: [...get().items, item] });
        toast("Item added to cart.");
      },
      removeItem: (id) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
      },
      removeAllItems: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
