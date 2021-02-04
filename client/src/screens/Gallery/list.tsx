import React from 'react';
import { IProject } from 'interfaces';
import { useTypedSelector } from 'hooks/use-typed-selector';
import ProjectItem from 'components/ProjectItem';

const ProjectsList = () => {
  const { items } = useTypedSelector(({ projects }) => projects);
  return (
    items && items.map((p: IProject) => <ProjectItem key={p._id} item={p} />)
  );
};

export default ProjectsList;
