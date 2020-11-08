import React, { FC } from "react";
import { connect } from "react-redux";
import Section from "components/DashboardComponents/Section";
import Modal from "components/Modal";
import { backgroundHeaders, printHeaders } from "./headers";
import { fetchPrints } from "store/actions/prints/fetchPrints";
import { fetchBackgrounds } from "store/actions/backgrounds/fetchBackgrounds";
import { IPrint } from "interfaces";

interface IProps {
  fetchBackgrounds: Function;
  fetchPrints: Function;
  backgrounds: any[];
  prints: IPrint[];
}
const Dashboard: FC<IProps> = ({
  fetchBackgrounds,
  fetchPrints,
  backgrounds,
  prints,
}) => {
  return (
    <>
      <div className="dashboard-screen">
        <Section
          sectionTitle="Backgrounds"
          formName="ADD_BG"
          headers={backgroundHeaders}
          fetchResource={fetchBackgrounds}
          items={backgrounds}
        />
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
  backgrounds: state.backgrounds.items,
});
export default connect(mapStateToProps, { fetchPrints, fetchBackgrounds })(
  Dashboard
);
