"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const socials = [
  { name: "LinkedIn", href: "/", icon: "/images/linkedin.png" },
  { name: "Google", href: "/", icon: "/images/google.png" },
  { name: "TikTok", href: "/", icon: "/images/tiktok.png" },
  { name: "Pinterest", href: "/", icon: "/images/pinterest.png" },
  { name: "Facebook", href: "/", icon: "/images/facebook.png" },
];

export default function SocialMediaSection() {
  const t = useTranslations("footer");

  return (
    <div>
      <h4 className="text-gray-900 font-semibold mb-4">
        {t("socialMediaTitle")}
      </h4>
      <div className="flex gap-4 items-center">
        {socials.map((item) => (
          <Link key={item.name} href={item.href} aria-label={item.name}>
            <Image
              src={item.icon}
              alt={item.name}
              width={35}
              height={35}
              className="hover:opacity-80 transition"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
