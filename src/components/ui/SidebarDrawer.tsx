"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import clsx from "clsx";

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
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/30 transition-opacity",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={clsx(
          "fixed top-0 bottom-0 z-[100] w-[75%] max-w-sm bg-white shadow-lg transition-transform duration-300 ease-in-out",
          side === "right" ? "right-0" : "left-0",
          isOpen
            ? "translate-x-0"
            : side === "right"
            ? "translate-x-full"
            : "-translate-x-full"
        )}
      >
        {/* Close button */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-accent">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto h-full pb-7">{children}</div>
      </aside>
    </>
  );
}
