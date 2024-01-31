import React from "react";

const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex justify-center gap-2 px-7 py-4 bg-coral-red rounded-full text-white border font-montserrat text-lg leading-none">
      {label}
      <img src={iconUrl} className="ml-2 w-5 h-5 rounded-full" />
    </button>
  );
};

export default Button;
