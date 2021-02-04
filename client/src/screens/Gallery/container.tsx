import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import PrintsLoading from 'screens/Prints/Loading';
import ProjectsList from './list';

const ProjectsContainer = () => {
  const { loading } = useTypedSelector((state) => state.projects);
  return (
    <div className='projects-container'>
      {loading ? <PrintsLoading /> : <ProjectsList />}
    </div>
  );
};

export default ProjectsContainer;
