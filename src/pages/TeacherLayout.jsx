import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TeacherSideBar from "../components/TeacherSideBar";

const Layout = () => {
  return (
    <div className="bg-dark flex">
      <aside className="w-60 fixed left-0 h-screen hidden lg:block">
        <TeacherSideBar />
      </aside>
      <main className="flex-1 lg:ml-60 p-10  text-light min-h-screen space-y-5">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
