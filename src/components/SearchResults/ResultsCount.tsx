"use client";

import { useTranslations } from "next-intl";

export default function ResultsCount({ count }: { count: number }) {
  const t = useTranslations("results");

  return (
    <h2 className="px-4 sm:px-0 text-lg font-bold mt-6">
      {t("resultsCount", { count })}
    </h2>
  );
}
