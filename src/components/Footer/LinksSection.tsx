"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type LinkItem = {
  key: string;
  href: string;
};

type Props = {
  titleKey: string;
  links: LinkItem[];
};

export default function LinksSection({ titleKey, links }: Props) {
  const t = useTranslations("footer");
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full md:w-auto flex-1 sm:flex-initial">
      {/* Toggleable title for mobile */}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="w-full py-4 md:py-0 flex items-center justify-between text-start md:cursor-default"
      >
        <h4 className="font-semibold text-gray-900 md:mb-3">{t(titleKey)}</h4>
        <span className="md:hidden text-gray-500">
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {/* 🟢 Collapsible section for mobile only */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            key="mobile-list"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 overflow-hidden md:hidden"
          >
            {links.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-accent transition block"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* 🖥️ Always-visible section for desktop */}
      <ul className="hidden md:block space-y-4">
        {links.map((item) => (
          <li key={item.key}>
            <Link
              href={item.href}
              className="text-sm text-gray-600 hover:text-accent transition block"
            >
              {t(item.key)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
