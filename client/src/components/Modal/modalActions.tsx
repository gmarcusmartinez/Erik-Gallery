import React from "react";
import PrintDelete from "../../components/DashboardComponents/PrintDelete";
import PrintForm from "../DashboardComponents/PrintForm";

export const renderForm = (component: string) => {
  switch (component) {
    case "DELETE_PRINT":
      return <PrintDelete />;
    case "ADD_PRINT":
      return <PrintForm formTitle="Add" />;
    case "EDIT_PRINT":
      return <PrintForm formTitle="Edit" />;

    default:
      return null;
  }
};
