"use client";

import { MoveLeft, MoveRight } from "lucide-react";
import { useLocale } from "next-intl";
import { useId, useEffect, useRef, useState } from "react";
import clsx from "clsx";

type TextInputProps = {
  value: string; // Redux value (can reset from outside)
  onChange: (val: string) => void; // dispatch to Redux (debounced)
  placeholder?: string;
  id?: string;
  className?: string;
  delay?: number;
};

export default function SearchInput({
  value,
  onChange,
  placeholder,
  id,
  className,
  delay = 400,
}: TextInputProps) {
  const locale = useLocale();
  const reactId = useId();
  const inputId = id || reactId;

  const [internalValue, setInternalValue] = useState(value);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const isExternalUpdate = useRef(false); // to track Redux resets

  // Sync internal state when Redux changes
  useEffect(() => {
    if (value !== internalValue) {
      isExternalUpdate.current = true;
      setInternalValue(value);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // Debounce + dispatch only if it's user input (not Redux reset)
  useEffect(() => {
    if (isExternalUpdate.current) {
      isExternalUpdate.current = false;
      return;
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      onChange(internalValue.trim());
    }, delay);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [internalValue, delay, onChange]);

  return (
    <div
      className={clsx(
        "w-full rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)]",
        className
      )}
    >
      <label htmlFor={inputId} className="sr-only">
        {placeholder}
      </label>

      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        <input
          type="search"
          id={inputId}
          value={internalValue}
          onChange={(e) => setInternalValue(e.target.value)}
          className="block w-full py-3 sm:py-2 px-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-accent focus:border-accent outline-none"
          placeholder={placeholder}
          autoComplete="off"
        />

        <div className="absolute end-2.5 top-1/2 transform -translate-y-1/2 bg-accent text-white flex items-center justify-center w-6 h-6 text-sm font-medium rounded-sm">
          {locale === "ar" ? <MoveLeft size={16} /> : <MoveRight size={16} />}
        </div>
      </div>
    </div>
  );
}
