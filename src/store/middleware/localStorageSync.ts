import { Middleware } from "@reduxjs/toolkit";

const localStorageSyncMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    if (typeof window !== "undefined") {
      try {
        const fullState = store.getState();
        const filters = fullState.filters.filters;
        const compactFilters = Object.fromEntries(
          Object.entries(filters).filter(([, value]) => {
            if (value === null) return false;
            if (typeof value === "string" && value.trim() === "") return false;
            return true;
          })
        );

        localStorage.setItem("filters", JSON.stringify(compactFilters));
      } catch (err) {
        console.warn("Failed to sync filters to localStorage", err);
      }
    }

    return result;
  };

export default localStorageSyncMiddleware;
