import PrintSection from "components/DashboardComponents/PrintSection";
import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-screen">
      <h2 className="prints-title">Prints</h2>
      <PrintSection />
    </div>
  );
};

export default Dashboard;
