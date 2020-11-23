import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import { fetchPrints } from "store/actions/prints/fetchPrints";
import LightBox from "components/LightBox";
import PrintsContainer from "./Container";

interface MatchParams {
  page: string;
}

interface IProps extends RouteComponentProps<MatchParams> {
  fetchPrints: Function;
}

const Prints: React.FC<IProps> = ({ fetchPrints, match }) => {
  const page = +match.params.page || 1;

  useEffect(() => {
    fetchPrints(page);
  }, [fetchPrints, page]);

  return (
    <div className="prints-screen">
      <PrintsContainer />
      <LightBox />
    </div>
  );
};

export default connect(null, { fetchPrints })(Prints);
