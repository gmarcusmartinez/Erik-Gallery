import PrintSection from "components/DashboardComponents/PrintSection";
import React from "react";
import Modal from "components/Modal";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard-screen">
        <h2 className="prints-title">Prints</h2>
        <PrintSection />
      </div>
      <Modal />
    </>
  );
};

export default Dashboard;
