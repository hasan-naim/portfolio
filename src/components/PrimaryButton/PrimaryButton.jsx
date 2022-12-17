import React from "react";

function PrimaryButton({ text, title, styles }) {
  return (
    <button
      className={`bg-primaryBlue-800 py-4 px-8 text-gray-100 hover:bg-primaryBlue-900 font-medium rounded-3xl duration-300 ${styles}`}
      title={title}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
