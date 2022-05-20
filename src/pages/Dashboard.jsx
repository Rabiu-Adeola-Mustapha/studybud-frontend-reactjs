import React from "react";
import Card from "../components/Card";
import PriceCard from "../components/PriceCard";
import { ArrowSmUpIcon, ArrowSmDownIcon } from "@heroicons/react/solid";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-col lg:gap-10">
        <div className="order-2 lg:order-1 flex flex-col gap-6 lg:flex-row lg:gap-10">
          <PriceCard bgColor="bg-lightTeal" />
          <PriceCard bgColor="bg-darkTeal" />
          <PriceCard bgColor="bg-navyBlue" />
        </div>
        <div className="lg:order-2 lg:flex lg: gap-10">
          <div className="order-1 lg:order-2">
            <Card>
              <div className="flex flex-col space-y-5 md:flex-row lg:flex-col lg:space-y-4">
                <div className="flex-1 text-left lg:text-right">
                  <p className="lg:text-2xl">WMD:123456789123456789</p>
                  <small className="text-right">abcdefgh</small>
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center justify-center py-2 space-x-2 bg-navyBlue flex-grow rounded-full">
                    <ArrowSmUpIcon className="w-5" />
                    <span>Increase</span>
                  </button>
                  <button className="flex justify-center items-center py-2 space-x-2 bg-navyBlue flex-grow rounded-full">
                    <ArrowSmDownIcon className="w-5" />
                    <span>Increase</span>
                  </button>
                </div>
              </div>
            </Card>
          </div>
          <div className="lg:order-3">
            <Card>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsa, saepe rerum ab fugit perferendis laboriosam
                commodi inventore sed sapiente eveniet veritatis quam error eos
                nesciunt, laudantium facilis suscipit officiis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsa, saepe rerum ab fugit perferendis laboriosam
                commodi inventore sed sapiente eveniet veritatis quam error eos
                nesciunt, laudantium facilis suscipit officiis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsa, saepe rerum ab fugit perferendis laboriosam
                commodi inventore sed sapiente eveniet veritatis quam error eos
                nesciunt, laudantium facilis suscipit officiis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsa, saepe rerum ab fugit perferendis laboriosam
                commodi inventore sed sapiente eveniet veritatis quam error eos
                nesciunt, laudantium facilis suscipit officiis?
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
