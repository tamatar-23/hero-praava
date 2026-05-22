"use client";

import React from "react";
import Image from "next/image";

export default function JohnDoePortalCard() {
  return (
    <div className="flex items-center gap-3 w-full">
      {/* Accent Indicator Bar */}
      <div className="w-[4px] self-stretch bg-brand-orange rounded-full my-0.5 shrink-0" />

      {/* Avatar Wrapper */}
      <div className="relative w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-full overflow-hidden border-2 border-indigo-200 dark:border-indigo-800">
        <Image
          src="/avatar.png"
          alt="John Doe Avatar"
          fill
          sizes="(max-width: 768px) 36px, 40px"
          className="object-cover"
          priority
        />
      </div>

      {/* Message Info Column */}
      <div className="flex flex-col text-left leading-tight">
        <span className="font-bold text-sm md:text-base text-slate-900 dark:text-slate-100">
          John Doe - Portal
        </span>
        <span className="text-[10px] md:text-xs font-medium text-slate-600 dark:text-slate-300 line-clamp-1 max-w-[160px] md:max-w-[180px]">
          Hey! Could you please review a document for me?
        </span>
        <div className="flex items-center gap-1.5 text-[9px] md:text-[11px] font-semibold">
          <span className="text-brand-blue dark:text-blue-400">
            MAT-2233
          </span>
          <span className="text-slate-400 font-normal">
            · 2 h ago
          </span>
        </div>
      </div>
    </div>
  );
}
