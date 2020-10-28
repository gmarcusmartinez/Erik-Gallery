import PrintsScreenContainer from "./Container";
import { fetchPrintsStart } from "store/actions/prints/fetchPrints";

interface IProps {
  fetchPrintsStart: Function;
}

const PrintsScreen: React.FC<IProps> = ({ fetchPrintsStart }) => {
  React.useEffect(() => {
    fetchPrintsStart();
  }, [fetchPrintsStart]);

  return (
    <div className="print-screen">
      <Route component={PrintsScreenContainer} />;
    </div>
  );
};
