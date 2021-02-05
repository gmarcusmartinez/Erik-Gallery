import React from 'react';
import ResourceDelete from 'components/DashboardComponents/ResourceDelete';
import PrintForm from 'components/DashboardComponents/Forms/PrintForm';
import BackgroundForm from 'components/DashboardComponents/Forms/BackgroundForm';
import ItemDetal from 'components/ItemDetail';
import ImageForm from 'components/DashboardComponents/Forms/ImageForm';
import ProjectForm from 'components/DashboardComponents/Forms/ProjectForm';

export const renderForm = (component: string) => {
  switch (component) {
    case 'DELETE_RESOURCE':
      return <ResourceDelete />;
    case 'ADD_PRINT':
      return <PrintForm formTitle='Add' />;
    case 'EDIT_PRINT':
      return <PrintForm formTitle='Edit' />;
    case 'ADD_BG':
      return <BackgroundForm />;
    case 'ADD_PROJECT':
      return <ProjectForm formTitle='Add' />;
    case 'EDIT_PROJECT':
      return <ProjectForm formTitle='Edit' />;
    case 'VIEW_ITEM':
      return <ItemDetal />;
    case 'ADD_PROJECT_IMG':
      return <ImageForm />;
    default:
      return null;
  }
};
