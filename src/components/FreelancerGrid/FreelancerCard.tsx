"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { useTranslations } from "next-intl";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

type Props = {
  freelancer: {
    id: string;
    name: string;
    profilePhoto: string;
    coverPhoto: string;
    level: number;
    role: string;
    rating: number;
    reviewCount: number;
    price: number;
  };
};

const FreelancerCard = ({ freelancer }: Props) => {
  const t = useTranslations("freelancer");

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      className="relative bg-white rounded-lg shadow-balanced overflow-hidden p-4"
    >
      <div className="select-none cursor-pointer absolute top-8 end-8 bg-white rounded-md z-50 p-1 shadow-md">
        <Heart
          size={20}
          className="text-accent rounded-full p-[2px]"
          stroke="none"
          fill="currentColor"
        />
      </div>

      <div className="select-none w-full h-[220px] relative rounded-tl-md rounded-tr-md overflow-hidden">
        <Image
          src={freelancer.coverPhoto}
          alt="Cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          className="object-cover cursor-pointer"
        />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Image
          src={freelancer.profilePhoto}
          alt={freelancer.name}
          width={40}
          height={40}
          className="rounded-full object-cover cursor-pointer"
        />
        <p className="cursor-pointer font-semibold  truncate">
          {freelancer.name}
        </p>
      </div>

      <div className="mt-2 flex justify-between items-center text-sm ">
        <span>
          {t("level")} {freelancer.level}
        </span>
        <span className="flex items-center gap-1 text-accent">
          {Array.from({ length: freelancer.level }).map((_, idx) => (
            <Star key={idx} size={14} fill="currentColor" />
          ))}
        </span>
      </div>

      <p className="text-sm mt-1 text-gray-700">
        {t(`roles.${freelancer.role}`, { default: freelancer.role })}
      </p>

      <p className="text-sm text-gray-700 mt-2 flex items-center gap-1">
        <Star size={14} className="text-yellow-500" fill="currentColor" />
        {t("rating", {
          rating: freelancer.rating,
          count: freelancer.reviewCount,
        })}
      </p>

      <p className="text-sm font-medium text-gray-800 mt-1">
        {t("from")} ${freelancer.price}
      </p>

      <button className="cursor-pointer mt-3 w-full bg-accent text-white text-sm font-medium py-2 rounded">
        {t("seeMore")}
      </button>
    </motion.div>
  );
};

export default FreelancerCard;
