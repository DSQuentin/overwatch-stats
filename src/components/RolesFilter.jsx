/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function RolesFilter({
  roles,
  selectedRole,
  setSelectedRole,
  getRoleIconUrl,
}) {
  let activeButton = () => {
    return "text-black bg-gray-300  border-2 rounded-sm border-white px-8 py-2.5 text-center inline-flex items-center mr-2 mb-2 gap-2 text-lg";
  };

  let innactiveButton = () => {
    return "text-customBlack hover:text-black bg-gray-200 hover:bg-gray-300 border-2 rounded-sm border-white px-8 py-2.5 text-center inline-flex items-center mr-2 mb-2 gap-2 text-lg";
  };

  return (
    <div className="flex gap-3 my-8">
      <button
        onClick={() => setSelectedRole(null)}
        className={selectedRole === null ? activeButton() : innactiveButton()}
      >
        Tous
      </button>

      {roles.map((role) => (
        <button
          key={role.id}
          onClick={() => setSelectedRole(role.name.toLowerCase())}
          className={
            selectedRole === role.name.toLowerCase()
              ? activeButton()
              : innactiveButton()
          }
        >
          <img
            src={getRoleIconUrl(role.name)}
            className="px-2 py-2 w-10 h-auto rounded-lg bg-gray-700"
            alt={role.name}
          />
          {role.name}
        </button>
      ))}
    </div>
  );
}
