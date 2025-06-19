"use client";

import { useAppSelector } from "@/store/hooks";
import { useTranslations } from "next-intl";
import Filters from "../Filters";
import FreelancerGrid from "../FreelancerGrid";
import { selectFilteredFreelancers } from "@/store/selectors";

const Results = () => {
  const t = useTranslations("results");

  const { searchQuery } = useAppSelector((state) => state.filters.filters);
  const filteredFreelancers = useAppSelector(selectFilteredFreelancers);

  const hasResults = filteredFreelancers.length > 0;

  return (
    <section className="py-6 px-4 sm:py-8 space-y-6">
      <div className="container mx-auto">
        {/* Title */}
        {searchQuery && (
          <h1 className="px-2 sm:px-0 text-2xl mb-4 md:mb-6 font-semibold text-gray-900">
            {t("title", { query: searchQuery })}
          </h1>
        )}

        {/* Filters */}
        <Filters />

        <div>
          {/* Results Count */}
          {hasResults && (
            <h2 className="px-4 sm:px-0 text-lg font-bold mt-6">
              {t("resultsCount", { count: filteredFreelancers.length })}
            </h2>
          )}

          {/* Grid or No Result */}
          {hasResults ? (
            <FreelancerGrid freelancers={filteredFreelancers} />
          ) : (
            <div className="mt-6 text-center text-gray-600 text-sm">
              {t("noResults")}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Results;
