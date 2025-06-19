"use client";

import { useTranslations } from "next-intl";

export default function NoResults() {
  const t = useTranslations("results");

  return (
    <div className="mt-6 px-3 text-center text-gray-600 text-sm">
      {t("noResults")}
    </div>
  );
}
