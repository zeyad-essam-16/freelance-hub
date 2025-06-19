import { Freelancer } from "@/types/freelancer";

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
  filteredFreelancers: Freelancer[];
};
