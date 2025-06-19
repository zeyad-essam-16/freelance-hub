import { configureStore, Middleware } from "@reduxjs/toolkit";
import filtersReducer from "@/store/slices/filterSlice";
import localStorageSyncMiddleware from "@/store/middleware/localStorageSync";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageSyncMiddleware as Middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
