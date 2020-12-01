import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import LightBox from "components/CommonComponents/LightBox";
import Pagination from "components/CommonComponents/Pagination";
import PrintsContainer from "screens/Prints/Container";
import { fetchPrints } from "store/actions/prints/fetchPrints";
import { printsPages } from "store/selectors/prints";

interface MatchParams {
  page: string;
}

interface IProps extends RouteComponentProps<MatchParams> {
  fetchPrints: Function;
  pages: number;
}

const Prints: React.FC<IProps> = ({ fetchPrints, match, pages }) => {
  const page = +match.params.page || 1;

  useEffect(() => {
    fetchPrints(page);
  }, [fetchPrints, page]);

  return (
    <div className="prints-screen">
      <PrintsContainer />
      <Pagination root="prints" pages={pages} />
      <LightBox />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ pages: printsPages });
export default connect(mapStateToProps, { fetchPrints })(Prints);
