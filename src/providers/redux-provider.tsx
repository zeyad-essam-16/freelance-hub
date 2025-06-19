"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { rehydrateFromStorage } from "@/store/slices/filterSlice";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("filters");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          store.dispatch(rehydrateFromStorage(parsed));
        } catch (err) {
          console.error("Failed to parse filters from localStorage", err);
        }
      }
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
