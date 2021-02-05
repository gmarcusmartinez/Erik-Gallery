import React from 'react';
import { useHistory } from 'react-router';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import ProjectAttrs from './attrs';

const Project = () => {
  const { fetchProject, toggleLightbox } = useActions();
  const { selectedItem } = useTypedSelector((state) => state.projects);
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];

  React.useEffect(() => {
    fetchProject(id);
  }, [fetchProject, id]);

  return (
    <div className='project-screen'>
      {selectedItem && (
        <ProjectAttrs item={selectedItem} toggleLightbox={toggleLightbox} />
      )}
    </div>
  );
};

export default Project;
