/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function HeroesCard({ name, role, portrait, getRoleIconUrl }) {
  return (
    <>
      <div>
        <p>{name}</p>
        <img src={portrait} alt={name} />
        <img
          src={getRoleIconUrl(role)}
          className="bg-gray-700 p-4"
          alt={role}
        />
      </div>
    </>
  );
}
