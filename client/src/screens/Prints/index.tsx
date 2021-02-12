import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import Pagination from 'components/CommonComponents/Pagination';
import PrintsContainer from 'screens/Prints/Container';

interface MatchParams {
  page: string;
}
interface IProps extends RouteComponentProps<MatchParams> {}

const Prints: React.FC<IProps> = ({ match }) => {
  const page = +match.params.page || 1;
  const { fetchPrints } = useActions();
  const { pages } = useTypedSelector((state) => state.prints);

  React.useEffect(() => {
    fetchPrints(page);
  }, [page, fetchPrints]);

  return (
    <div className='prints-screen'>
      <PrintsContainer />
      <Pagination root='prints' pages={pages} />
    </div>
  );
};
export default Prints;
