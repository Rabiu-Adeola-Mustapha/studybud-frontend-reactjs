import React from "react";
import {
  AcademicCapIcon,
  UserAddIcon,
  // CashIcon,
  // IdentificationIcon,
  // PresentationChartLineIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";


const StudentSideBar = () => {
  return (
    <div className="bg-darkGray h-full space-y-5">
      <div className="bg-navyBlue text-light h-32 flex justify-center items-center">
        <AcademicCapIcon className="w-10" />
        <span className="text-2xl">School Portal</span>
      </div>
      <div className="space-y-5 pr-2">
        <div>
          <h3 className="bg-darkTeal text-light pl-8 font-bold italic text-xl py-2 rounded-r-full">
            Students Section
          </h3>
          <ul className="pl-5 mt-3 space-y-2">
            <li className=" cursor-pointer hover:bg-lightTeal rounded-r-full pl-2 py-1 transition-colors duration-500">
              <Link
                to="/admin/register-student"
                className="flex text-light space-x-2"
              >
                <UserAddIcon className="w-5" />
                <span> Subjects</span>
              </Link>
            </li>
            <li className=" cursor-pointer hover:bg-lightTeal rounded-r-full pl-2 py-1 transition-colors duration-500">
              <Link
                to="/admin/register-student"
                className="flex text-light space-x-2"
              >
                <UserAddIcon className="w-5" />
                <span> Attendance</span>
              </Link>
            </li>
            <li className=" cursor-pointer hover:bg-lightTeal rounded-r-full pl-2 py-1 transition-colors duration-500">
              <Link
                to="/admin/register-student"
                className="flex text-light space-x-2"
              >
                <UserAddIcon className="w-5" />
                <span> Profile</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* <div>
          <h3 className="bg-darkTeal text-light pl-8 font-bold italic text-xl py-2 rounded-r-full">
            Teachers Section
          </h3>
          <ul className="pl-8 mt-3 space-y-2">
            <li className="flex text-light space-x-2 cursor-pointer hover:bg-lightTeal rounded-r-full pl-2 py-1 transition-colors duration-500">
              <Link
                to="/admin/register-teacher"
                className="flex text-light space-x-2"
              >
                <UserAddIcon className="w-5" />
                <span>Register Teacher</span>
              </Link>
            </li>
            <li className="flex text-light space-x-2 cursor-pointer hover:bg-lightTeal rounded-r-full pl-2 py-1 transition-colors duration-500">
              <Link
                to="/register-student"
                className="flex text-light space-x-2"
              >
                <IdentificationIcon className="w-5" />
                <span>Teacher Details</span>
              </Link>
            </li>
            <li className="flex text-light space-x-2 cursor-pointer hover:bg-lightTeal rounded-r-full pl-2 py-1 transition-colors duration-500">
              <Link
                to="/register-student"
                className="flex text-light space-x-2"
              >
                <PresentationChartLineIcon className="w-5" />
                <span>Teacher Attendance</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="bg-darkTeal text-light pl-8 font-bold italic text-xl py-2 rounded-r-full">
            Admin Section
          </h3>
          <ul className="pl-8 mt-3 space-y-2">
            <li className="flex text-light space-x-2 cursor-pointer hover:bg-lightTeal rounded-r-full pl-2 py-1 transition-colors duration-500">
              <Link
                to="/admin/register-admin"
                className="flex text-light space-x-2"
              >
                <UserAddIcon className="w-5" />
                <span>Register Admin</span>
              </Link>
            </li>
            <li className="flex text-light space-x-2 cursor-pointer hover:bg-lightTeal rounded-r-full pl-2 py-1 transition-colors duration-500">
              <Link
                to="/admin/register-admin"
                className="flex text-light space-x-2"
              >
                <CashIcon className="w-5" />
                <span>Admin Salary</span>
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default StudentSideBar;
