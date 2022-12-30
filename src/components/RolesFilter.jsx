/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function RolesFilter({
  roles,
  selectedRole,
  setSelectedRole,
  getRoleIconUrl,
}) {
  return (
    <>
      <button
        onClick={() => setSelectedRole(null)}
        className={selectedRole === null ? "bg-gray-200" : ""}
      >
        Tous
      </button>
      {roles.map((role) => (
        <button
          key={role.id}
          onClick={() => setSelectedRole(role.name.toLowerCase())}
          className={
            selectedRole === role.name.toLowerCase()
              ? "bg-gray-700 mx-2 "
              : "bg-gray-500 mx-2 "
          }
        >
          <img
            src={getRoleIconUrl(role.name)}
            className="p-4"
            alt={role.name}
          />
        </button>
      ))}
    </>
  );
}
