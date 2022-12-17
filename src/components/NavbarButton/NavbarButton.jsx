import React from "react";

function PrimaryButton({ text, title }) {
  return (
    <button
      className="bg-primaryBlue-800 py-2 px-5 text-gray-100 hover:bg-primaryBlue-900 font-medium rounded-3xl duration-300"
      title={title}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
