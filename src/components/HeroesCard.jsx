/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function HeroesCard({ name, role, portrait, getRoleIconUrl }) {
  return (
    <>
      <div className="border-4 border-[#1d253a] bg-white inline-block relative rounded-md hover:scale-110 transition-all ">
        <img src={portrait} alt={name} className=" h-44 w-auto" />
        <div className="absolute bottom-0 left-0 flex items-center justify-between w-full px-2 bg-gradient-to-t from-[#1d253a] to-[#1d253a00]">
          <img
            src={getRoleIconUrl(role)}
            className=" p-2 h-12 w-auto"
            alt={role}
          />
          <span className="text-white text-xl">{name}</span>
        </div>
      </div>
    </>
  );
}
