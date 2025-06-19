"use client";

import { Mail, Bell, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function UserActions() {
  return (
    <div className="flex items-center justify-end gap-2">
      <div className="flex align-baseline cursor-pointer">
        <Mail size={22} />
      </div>
      <div className="flex align-baseline cursor-pointer">
        <Bell size={22} />
      </div>
      <div className="flex align-baseline cursor-pointer">
        <ShoppingCart size={22} />
      </div>
      <div className="flex align-baseline cursor-pointer ms-1.5">
        <Image
          width={44}
          height={44}
          className="rounded-full"
          src="/images/avatar.jpeg"
          alt="Rounded avatar"
        />
      </div>
    </div>
  );
}
