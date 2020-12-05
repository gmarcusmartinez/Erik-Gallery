import React from "react";
import PrintDelete from "components/DashboardComponents/PrintDelete";
import PrintForm from "components/DashboardComponents/Forms/PrintForm";
import BackgroundForm from "components/DashboardComponents/Forms/BackgroundForm";
import PrintDetail from "components/PrintDetail";
import ZineForm from "components/DashboardComponents/Forms/ZineForm";

export const renderForm = (component: string) => {
  switch (component) {
    case "DELETE_PRINT":
      return <PrintDelete />;
    case "ADD_PRINT":
      return <PrintForm formTitle="Add" />;
    case "EDIT_PRINT":
      return <PrintForm formTitle="Edit" />;
    case "ADD_BG":
      return <BackgroundForm />;
    case "VIEW_PRINT":
      return <PrintDetail />;
    case "ADD_ZINE":
      return <ZineForm formTitle="Add" />;
    default:
      return null;
  }
};
