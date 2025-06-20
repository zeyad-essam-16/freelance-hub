"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import clsx from "clsx";
import Portal from "@/components/ui/Portal";

type SidebarDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  side?: "left" | "right";
};

export default function SidebarDrawer({
  isOpen,
  onClose,
  children,
  title,
  side = "right",
}: SidebarDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <Portal>
      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 z-[99] bg-black/30 transition-opacity",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={clsx(
          "fixed top-0 bottom-0 z-[100] w-[75%] max-w-sm bg-white shadow-lg transition-transform duration-300 ease-in-out",
          "flex flex-col",
          side === "right" ? "right-0" : "left-0",
          isOpen
            ? "translate-x-0"
            : side === "right"
            ? "translate-x-full"
            : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-2 border-b border-accent shrink-0">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button type="button" className="p-3" onClick={onClose}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="p-4 overflow-y-auto flex-1 pb-7 overscroll-contain">
          {children}
        </div>
      </aside>
    </Portal>
  );
}
