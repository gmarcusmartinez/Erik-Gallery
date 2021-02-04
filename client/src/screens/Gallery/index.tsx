import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import Pagination from 'components/CommonComponents/Pagination';
import ProjectsContainer from './container';

interface MatchParams {
  page: string;
}
interface IProps extends RouteComponentProps<MatchParams> {}

const Gallery: React.FC<IProps> = ({ match }) => {
  const page = +match.params.page || 1;
  const { fetchProjects } = useActions();
  const { pages } = useTypedSelector((state) => state.projects);
  React.useEffect(() => {
    fetchProjects(page);
  }, [page, fetchProjects]);

  return (
    <div className='gallery-screen'>
      <ProjectsContainer />
      <Pagination root='prints' pages={pages} />
    </div>
  );
};

export default Gallery;
