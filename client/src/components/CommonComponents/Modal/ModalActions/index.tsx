import React from 'react';
import ResourceDelete from 'components/DashboardComponents/ResourceDelete';
import PrintForm from 'components/DashboardComponents/Forms/PrintForm';
import BackgroundForm from 'components/DashboardComponents/Forms/BackgroundForm';
import ItemDetal from 'components/ItemDetail';
import ZineForm from 'components/DashboardComponents/Forms/ZineForm';
import ImageForm from 'components/DashboardComponents/Forms/ImageForm';
import PreviewZine from 'components/PreviewZine';
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
    case 'VIEW_ITEM':
      return <ItemDetal />;
    case 'ADD_ZINE':
      return <ZineForm formTitle='Add' />;
    case 'EDIT_ZINE':
      return <ZineForm formTitle='Edit' />;
    case 'ADD_IMG':
      return <ImageForm />;
    case 'PREVIEW_ZINE':
      return <PreviewZine />;
    default:
      return null;
  }
};
