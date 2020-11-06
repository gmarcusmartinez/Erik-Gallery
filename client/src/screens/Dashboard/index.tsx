import React, { FC } from "react";
import { connect } from "react-redux";
import Section from "components/DashboardComponents/Section";
import Modal from "components/Modal";
import { printHeaders } from "./headers";
import { fetchPrints } from "store/actions/prints/fetchPrints";
import { IPrint } from "interfaces";

interface IProps {
  fetchPrints: Function;
  prints: IPrint[];
}
const Dashboard: FC<IProps> = ({ fetchPrints, prints }) => {
  return (
    <>
      <div className="dashboard-screen">
        <Section
          sectionTitle="Prints"
          formName="ADD_PRINT"
          headers={printHeaders}
          fetchResource={fetchPrints}
          items={prints}
        />
      </div>
      <Modal />
    </>
  );
};
const mapStateToProps = (state: any) => ({
  prints: state.prints.items,
});
export default connect(mapStateToProps, { fetchPrints })(Dashboard);
