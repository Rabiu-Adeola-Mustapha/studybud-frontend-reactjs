import React from "react";

const Card = ({ bgColor, children }) => {
  return (
    <div
      className={`min-h-44 p-5 rounded-2xl flex-grow space-y-5 ${
        bgColor ? bgColor : "bg-darkGray"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
