import PrintSection from "../../components/DashboardComponents/PrintSection";
import React from "react";
import Modal from "../../components/Modal";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard-screen">
        <PrintSection />
      </div>
      <Modal />
    </>
  );
};

export default Dashboard;
