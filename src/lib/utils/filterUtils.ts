import { FilterState } from "@/store/slices/filterSlice";

export const parseBudget = (val: string | null): [number, number] | null => {
  if (!val) return null;
  if (val === "<25") return [0, 25];
  if (val === "25-100") return [25, 100];
  if (val === ">100") return [101, Infinity];
  return null;
};

export const reverseBudget = (
  range: [number, number] | null
): string | null => {
  if (!range) return null;
  const [min, max] = range;
  if (min === 0 && max === 25) return "<25";
  if (min === 25 && max === 100) return "25-100";
  if (min === 101 && max === Infinity) return ">100";
  return null;
};

export const isFiltersActive = (filters: FilterState) => {
  return (
    filters.searchQuery.trim() !== "" ||
    filters.serviceCategory !== null ||
    filters.sellerLevel !== null ||
    filters.budgetRange !== null ||
    filters.deliveryTime !== null ||
    filters.secondaryLocation.trim() !== "" ||
    filters.sortBy !== null
  );
};
