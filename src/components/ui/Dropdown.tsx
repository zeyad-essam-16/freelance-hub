"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { ChevronDown, X } from "lucide-react";
import clsx from "clsx";

type Option = {
  key: string;
  value: string | number;
};

type DropdownProps = {
  options: Option[];
  value: string | number | null;
  onChange: (val: string | number | null) => void;
  placeholderKey?: string; // i18n key
  className?: string;
  namespace?: string; // default: "filters"
  alwaysOpen?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "px-2 py-2 text-sm",
  md: "px-3 py-4 text-sm",
  lg: "px-4 py-4 text-base",
};

export default function Dropdown({
  options,
  value,
  onChange,
  placeholderKey = "selectPlaceholder",
  className,
  namespace = "filters",
  alwaysOpen = false,
  size,
}: DropdownProps) {
  const t = useTranslations(namespace);
  const locale = useLocale();

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected =
    value !== null ? options.find((o) => o.value === value) : null;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={clsx("relative w-full", className)}
      ref={containerRef}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={clsx(
          "w-full text-gray-800 shadow-[0_2px_8px_var(--tw-shadow-color)] shadow-accent/20 border border-accent/50 hover:border-accent transition-colors duration-200 bg-white rounded-lg flex items-center justify-between relative",
          sizeClasses[size || "md"]
        )}
      >
        <span className="truncate">
          {selected ? t(selected.key) : t(placeholderKey)}
        </span>

        {selected && (
          <X
            className="w-4 h-4 absolute end-10 text-gray-400 hover:text-red-500 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); // prevent dropdown toggle
              onChange(null);
              setOpen(false);
            }}
          />
        )}

        <ChevronDown className="w-4 h-4 text-gray-500 ml-2" />
      </button>

      {(open || alwaysOpen) && (
        <ul className="absolute left-0 right-0 mt-1 z-[100] bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden text-sm max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <li
              key={opt.value.toString()}
              onClick={() => {
                onChange(opt.value);
                if (!alwaysOpen) setOpen(false);
              }}
              className={clsx(
                "px-4 py-3 cursor-pointer hover:bg-gray-100 transition",
                value === opt.value && "bg-gray-100 font-semibold"
              )}
            >
              {t(opt.key)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
