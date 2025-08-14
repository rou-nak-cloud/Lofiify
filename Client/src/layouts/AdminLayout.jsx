import React from "react";
import { ToastContainer } from 'react-toastify';
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/adminSidebar";
import AdminNavbar from "../components/AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="flex items-start min-h-screen">
        <ToastContainer />
        <AdminSidebar />
      <div className="flex-1 h-screen overflow-y-scroll p-4 bg-[#0f172a]">
        <AdminNavbar />
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
            <Outlet /> {/* Admin pages go here */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
