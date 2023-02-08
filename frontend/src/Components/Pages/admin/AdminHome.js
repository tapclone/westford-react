import React from "react";
import AdminHome from "../../admin/Home/Home";
import Sidebar from "../../admin/sidebar/Sidebar";

function AdminHomePage() {
  return (
    <div>
      <Sidebar />  
      <AdminHome /> 
    </div> 
  );  
}    

export default AdminHomePage; 
