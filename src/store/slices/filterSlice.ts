import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import freelancers from "@/data/freelancer.json";

export type sortBy =
  | "mostRated"
  | "lowestRated"
  | "highestPrice"
  | "lowestPrice"
  | null;

export type FilterState = {
  searchQuery: string;
  serviceCategory: string | null;
  sellerLevel: number | null;
  budgetRange: [number, number] | null;
  deliveryTime: number | null;
  secondaryLocation: string;
  sortBy: sortBy;
};

export type FiltersSliceState = {
  filters: FilterState;
  allFreelancers: typeof freelancers;
};

const initialFilters: FilterState = {
  searchQuery: "",
  serviceCategory: null,
  sellerLevel: null,
  budgetRange: null,
  deliveryTime: null,
  secondaryLocation: "",
  sortBy: null,
};

const getInitialState = (): FiltersSliceState => ({
  filters: initialFilters,
  allFreelancers: freelancers,
});

const filterSlice = createSlice({
  name: "filters",
  initialState: getInitialState(),
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.filters.searchQuery = action.payload;
    },
    setServiceCategory(state, action: PayloadAction<string | null>) {
      state.filters.serviceCategory = action.payload;
    },
    setSellerLevel(state, action: PayloadAction<number | null>) {
      state.filters.sellerLevel = action.payload;
    },
    setBudgetRange(state, action: PayloadAction<[number, number] | null>) {
      state.filters.budgetRange = action.payload;
    },
    setDeliveryTime(state, action: PayloadAction<number | null>) {
      state.filters.deliveryTime = action.payload;
    },
    setSecondaryLocation(state, action: PayloadAction<string>) {
      state.filters.secondaryLocation = action.payload;
    },
    setSortBy(state, action: PayloadAction<sortBy>) {
      state.filters.sortBy = action.payload;
    },
    resetFilters(state) {
      state.filters = initialFilters;
    },
    rehydrateFromStorage(state, action: PayloadAction<FilterState>) {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const {
  setSearchQuery,
  setServiceCategory,
  setSellerLevel,
  setBudgetRange,
  setDeliveryTime,
  setSecondaryLocation,
  setSortBy,
  resetFilters,
  rehydrateFromStorage,
} = filterSlice.actions;

export default filterSlice.reducer;
