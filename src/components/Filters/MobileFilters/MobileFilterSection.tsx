"use client";

import { useTranslations } from "next-intl";
import clsx from "clsx";

type Option = {
  key: string;
  value: string | number;
};

type Props = {
  titleKey: string;
  options: Option[];
  selected: string | number | null;
  onSelect: (val: string | number | null) => void;
  namespace?: string;
};

export default function MobileFilterSection({
  titleKey,
  options,
  selected,
  onSelect,
  namespace = "filters",
}: Props) {
  const t = useTranslations(namespace);

  return (
    <div className="border-b border-gray-200 py-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">
        {t(titleKey)}
      </h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelect(null)}
          className={clsx(
            "px-3 py-1.5 border rounded-full text-sm transition",
            selected === null
              ? "bg-accent text-white border-accent"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          )}
        >
          {t("all")}
        </button>
        {options.map((opt) => (
          <button
            key={opt.value.toString()}
            onClick={() =>
              selected === opt.value ? onSelect(null) : onSelect(opt.value)
            }
            className={clsx(
              "px-3 py-1.5 border rounded-full text-sm transition",
              selected === opt.value
                ? "bg-accent text-white border-accent"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            )}
          >
            {t(opt.key)}
          </button>
        ))}
      </div>
    </div>
  );
}
