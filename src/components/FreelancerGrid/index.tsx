"use client";

import { AnimatePresence } from "framer-motion";
import FreelancerCard from "./FreelancerCard";
import { Freelancer } from "@/types/freelancer";

type Props = {
  freelancers: Freelancer[];
};

const FreelancerGrid = ({ freelancers }: Props) => {
  if (freelancers.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
      <AnimatePresence>
        {freelancers.map((freelancer) => (
          <div
            key={freelancer.id}
            className="w-full max-w-[400px] mx-auto sm:mx-0"
          >
            <FreelancerCard freelancer={freelancer} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FreelancerGrid;
