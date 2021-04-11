import React from 'react';
import { useHistory } from 'react-router';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ProjectAttrs } from './attrs';
import { Spinner } from 'components/CommonComponents/Spinner';

const Project = () => {
  const { fetchProject } = useActions();
  const { selectedItem, loading } = useTypedSelector((state) => state.projects);
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];

  React.useEffect(() => {
    fetchProject(id);
  }, [fetchProject, id]);

  if (loading) return <Spinner message='' />;
  return (
    <div className='project-screen'>
      {selectedItem && <ProjectAttrs item={selectedItem} />}
    </div>
  );
};

export default Project;
