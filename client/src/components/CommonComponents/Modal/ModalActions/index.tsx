import React from 'react';
import BackgroundForm from 'components/DashboardComponents/Forms/bg-form';
import { ItemDetail } from 'components/ItemDetail';
import ImageForm from 'components/DashboardComponents/Forms/image-form';
import PrintForm from 'components/DashboardComponents/Forms/print-form';
import ProjectForm from 'components/DashboardComponents/Forms/project-form';
import ResourceDelete from 'components/DashboardComponents/ResourceDelete';
import BioForm from 'components/DashboardComponents/Forms/bio-form';

export const renderForm = (component: string) => {
  switch (component) {
    case 'ADD_BG':
      return <BackgroundForm />;
    case 'EDIT_BIO':
      return <BioForm />;
    case 'DELETE_RESOURCE':
      return <ResourceDelete />;
    case 'ADD_PRINT':
      return <PrintForm formTitle='Add' />;
    case 'EDIT_PRINT':
      return <PrintForm formTitle='Edit' />;
    case 'ADD_PROJECT':
    case 'EDIT_PROJECT':
      return <ProjectForm />;
    case 'VIEW_ITEM':
      return <ItemDetail />;
    case 'ADD_PROJECT_IMG':
      return <ImageForm />;
    default:
      return null;
  }
};
