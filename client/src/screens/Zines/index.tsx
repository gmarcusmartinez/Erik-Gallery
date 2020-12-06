import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import LightBox from "components/CommonComponents/LightBox";
import Pagination from "components/CommonComponents/Pagination";
import ZinesContainer from "screens/Zines/Contatiner";
import { fetchZines } from "store/actions/zines";
import { zinesPages } from "store/selectors/zines";

interface MatchParams {
  page: string;
}

interface IProps extends RouteComponentProps<MatchParams> {
  fetchZines: Function;
  pages: number;
}

const Zines: React.FC<IProps> = ({ fetchZines, match, pages }) => {
  const page = +match.params.page || 1;

  useEffect(() => {
    fetchZines(page);
  }, [fetchZines, page]);

  return (
    <div className="zines-screen">
      <ZinesContainer />
      <Pagination root="zines" pages={pages} />
      <LightBox />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ pages: zinesPages });
export default connect(mapStateToProps, { fetchZines })(Zines);
