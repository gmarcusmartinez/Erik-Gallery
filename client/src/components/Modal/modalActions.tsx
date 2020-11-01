import React from "react";
import PrintDelete from "../../components/DashboardComponents/PrintDelete";
import PrintAdd from "../../components/DashboardComponents/PrintAdd";

export const renderForm = (component: string) => {
  switch (component) {
    case "DELETE_PRINT":
      return <PrintDelete />;
    case "ADD_PRINT":
      return <PrintAdd />;
    default:
      return null;
  }
};
