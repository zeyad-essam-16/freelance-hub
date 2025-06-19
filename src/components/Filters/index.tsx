"use client";

import Dropdown from "../ui/Dropdown";
import { SORT_OPTIONS } from "@/constants/filterOptions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSortBy, resetFilters, sortBy } from "@/store/slices/filterSlice";
import LocationFilter from "./LocationFilter";
import DesktopFilters from "./DesktopFilters";
import MobileFilters from "./MobileFilters";
import { isFiltersActive } from "@/lib/utils/filterUtils";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Filters() {
  const dispatch = useAppDispatch();
  const t = useTranslations("filters");

  const { sortBy } = useAppSelector((state) => state.filters.filters);

  const filters = useAppSelector((state) => state.filters.filters);
  const showReset = isFiltersActive(filters);

  return (
    <section className="pb-2 sm:pb-8 border-b border-gray-200">
      {/* Desktop Filter Grid */}
      <div className="hidden sm:block">
        <DesktopFilters />
      </div>

      <div className="flex items-end justify-between sm:items-center gap-4 flex-col sm:flex-row">
        <div className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-10px)] ">
          <LocationFilter />
        </div>

        <div className="flex sm:block w-full sm:w-auto justify-between">
          <div className="block sm:hidden mb-4">
            <MobileFilters />
          </div>
          <div className="w-[150px] min-w-[150px] md:w-[150px]">
            <Dropdown
              options={SORT_OPTIONS}
              value={sortBy} // You'll need to store this in Redux or local state
              onChange={(val) => dispatch(setSortBy(val as sortBy))}
              placeholderKey="sortBy"
              size="sm"
            />
          </div>
        </div>
      </div>
      {showReset && (
        <div className="sm:mt-4 mb-4 sm:mb-0">
          <button
            onClick={() => dispatch(resetFilters())}
            className="cursor-pointer inline-flex items-center gap-2 text-sm px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            <X size={14} />
            {t("reset")}
          </button>
        </div>
      )}
    </section>
  );
}
