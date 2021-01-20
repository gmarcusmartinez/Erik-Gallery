import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';
import LightBox from 'components/CommonComponents/LightBox';
import Pagination from 'components/CommonComponents/Pagination';
import ZinesContainer from 'screens/Zines/Contatiner';

interface MatchParams {
  page: string;
}
interface IProps extends RouteComponentProps<MatchParams> {}

const Zines: React.FC<IProps> = ({ match }) => {
  const { pages } = useTypedSelector((state) => state.zines);
  const { fetchZines } = useActions();
  const page = +match.params.page || 1;

  React.useEffect(() => {
    fetchZines(page);
  }, [page, fetchZines]);

  return (
    <div className='zines-screen'>
      <ZinesContainer />
      <Pagination root='zines' pages={pages} />
      <LightBox />
    </div>
  );
};

export default Zines;
