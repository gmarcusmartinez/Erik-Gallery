

import WithSpinner from "components/SpinnerHOC/WithSpinner";
import PrintList from "./List";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsPrintsLoading,
});

const PrintsScreenContainer = connect(
  mapStateToProps,
  null
)(WithSpinner(PrintList));

export default PrintsScreenContainer;
