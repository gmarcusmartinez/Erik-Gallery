import React from 'react';
import { IProject } from 'interfaces';
import { useTypedSelector } from 'hooks/use-typed-selector';
import ProjectItem from 'components/ProjectItem';

export const ProjectsContainer = () => {
  const { loading, items } = useTypedSelector((state) => state.projects);
  return (
    <div className='projects-container'>
      {loading ? (
        <>
          {[...Array(6)].map(() => (
            <div className='loading-print-card'>
              <div className='loading-print-card__img shine'></div>
              <div className='loading-print-card__details shine'></div>
              <div className='loading-print-card__size shine'></div>
            </div>
          ))}
        </>
      ) : (
        items.map((p: IProject) => <ProjectItem key={p._id} item={p} />)
      )}
    </div>
  );
};
