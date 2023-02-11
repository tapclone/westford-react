import React from "react";
import BusinessPartners from "../../admin/businessPartners/BusinessPartners";
import Sidebar from "../../admin/sidebar/Sidebar";
function BusinessPartnersPage() {
  return (
    <div>
      <Sidebar/>
      <BusinessPartners />
    </div>
  );
}

export default BusinessPartnersPage;
