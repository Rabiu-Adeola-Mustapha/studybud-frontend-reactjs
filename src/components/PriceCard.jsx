import React from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";

import Card from "./Card";

const PriceCard = ({ bgColor }) => {
  return (
    <Card bgColor={bgColor}>
      <div className="flex justify-between items-center">
        <p>123,456,789</p>
        <PlusCircleIcon className="w-8" />
      </div>
      <div className="text-3xl font-bold">$7,200</div>
      <div>Lorem ipsum dolor sit amet.</div>
    </Card>
  );
};

export default PriceCard;
