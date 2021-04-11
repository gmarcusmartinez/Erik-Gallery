import React from 'react';
import { IProject } from 'interfaces';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ProjectItem } from 'components/ProjectItem';
import { LoadingCard } from 'components/CommonComponents/LoadingCard';

export const ProjectsContainer = () => {
  const { loading, items } = useTypedSelector((state) => state.projects);
  const cards = [...Array(6)].map((_, i) => <LoadingCard i={i} />);
  const list = items.map((p: IProject) => <ProjectItem key={p._id} item={p} />);
  return (
    <div className='projects-container'>
      {loading ? <>{cards}</> : <>{list}</>}
    </div>
  );
};
