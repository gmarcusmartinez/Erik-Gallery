import React from "react";
import PrintDelete from "components/DashboardComponents/PrintDelete";
import PrintAdd from "components/DashboardComponents/PrintAdd";

export const renderForm = (component: string, id?: string) => {
  switch (component) {
    case "DELETE_PRINT":
      return <PrintDelete id={id} />;
    case "ADD_PRINT":
      return <PrintAdd />;
    default:
      return null;
  }
};
