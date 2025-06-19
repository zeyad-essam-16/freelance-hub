import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { locationMap } from "@/lib/utils/locationMap";

export const selectFilters = (state: RootState) => state.filters.filters;
export const selectAllFreelancers = (state: RootState) =>
  state.filters.allFreelancers;

export const selectFilteredFreelancers = createSelector(
  [selectAllFreelancers, selectFilters],
  (freelancers, filters) => {
    return freelancers
      .filter((f) =>
        f.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
      )
      .filter((f) =>
        filters.serviceCategory ? f.category === filters.serviceCategory : true
      )
      .filter((f) =>
        filters.sellerLevel ? f.level === filters.sellerLevel : true
      )
      .filter((f) =>
        filters.budgetRange
          ? f.price >= filters.budgetRange[0] &&
            f.price <= filters.budgetRange[1]
          : true
      )
      .filter((f) =>
        filters.deliveryTime ? f.deliveryTime <= filters.deliveryTime : true
      )
      .filter((f) => {
        if (!filters.secondaryLocation) return true;

        const userInput = filters.secondaryLocation.trim().toLowerCase();

        const matchedLocations = Object.entries(locationMap)
          .filter(
            ([arabic, english]) =>
              arabic.toLowerCase().includes(userInput) ||
              english.toLowerCase().includes(userInput)
          )
          .map(([, english]) => english.toLowerCase());

        matchedLocations.push(userInput);

        return matchedLocations.some((loc) =>
          f.secondaryLocation.toLowerCase().includes(loc)
        );
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case "mostRated":
            return b.rating - a.rating;
          case "lowestRated":
            return a.rating - b.rating;
          case "highestPrice":
            return b.price - a.price;
          case "lowestPrice":
            return a.price - b.price;
          default:
            return 0;
        }
      });
  }
);
