"use client";

import { useAppSelector } from "@/store/hooks";
import { selectFilteredFreelancers } from "@/store/selectors";

import Title from "./Title";
import Filters from "../Filters";
import ResultsCount from "./ResultsCount";
import NoResults from "./NoResults";
import FreelancerGrid from "../FreelancerGrid";

const SearchResults = () => {
  const { searchQuery } = useAppSelector((state) => state.filters.filters);
  const filteredFreelancers = useAppSelector(selectFilteredFreelancers);
  const hasResults = filteredFreelancers.length > 0;

  return (
    <section className="py-6 px-4 sm:py-8 space-y-6">
      <div className="container mx-auto">
        <Title query={searchQuery} />
        <Filters />
        <div>
          {hasResults && <ResultsCount count={filteredFreelancers.length} />}
          {hasResults ? (
            <FreelancerGrid freelancers={filteredFreelancers} />
          ) : (
            <NoResults />
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
