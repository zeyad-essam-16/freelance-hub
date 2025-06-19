"use client";

import { useTranslations } from "next-intl";

export default function Title({ query }: { query: string }) {
  const t = useTranslations("results");

  if (!query) return null;

  return (
    <h1 className="px-2 sm:px-0 text-2xl mb-4 md:mb-6 font-semibold text-gray-900">
      {t("title", { query })}
    </h1>
  );
}
