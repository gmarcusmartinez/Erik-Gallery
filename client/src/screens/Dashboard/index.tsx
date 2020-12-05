import React, { FC } from "react";
import { connect } from "react-redux";
import { fetchPrints } from "store/actions/prints/fetchPrints";
import { fetchBackgrounds } from "store/actions/backgrounds/fetchBackgrounds";
import {
  backgroundHeaders,
  fetchResourceLinks,
  printHeaders,
  zineHeaders,
} from "./headers";
import Section from "components/DashboardComponents/Section";
import { IPrint } from "interfaces";
import SideNavTrigger from "./SideNavTrigger";

interface IProps {
  fetchPrints: Function;
  prints: IPrint[];
  fetchBackgrounds: Function;
  backgrounds: any[];
}
const Dashboard: FC<IProps> = (props) => {
  const [sidenavOpen, setSideNavOpen] = React.useState(false);
  const [resourceType, setResourceType] = React.useState("");

  const sidenavClass = sidenavOpen ? "sidenav-open" : "sidenav-closed";

  const sidenavLinks = fetchResourceLinks.map((l, i) => (
    <div
      key={i}
      className="dashboard__sidenav__link"
      onClick={() => handleClick(l.value)}
    >
      {l.text}
    </div>
  ));

  const handleClick = (resource: string) => {
    setSideNavOpen(false);
    setResourceType(resource);

    switch (resource) {
      case "prints":
        return props.fetchPrints();
      case "backgrounds":
        return props.fetchBackgrounds();
    }
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashboard__header">
          <h2 className="dashboard__title">Admin Dashboard</h2>
          <SideNavTrigger cb={setSideNavOpen} bool={!sidenavOpen} />
        </div>
        <div className={`dashboard__sidenav ${sidenavClass}`}>
          <div className="dashboard__sidenav__links">{sidenavLinks}</div>
        </div>
        <div className="dashboard__resources">
          {resourceType === "prints" && (
            <Section
              resourceType="prints"
              formName="ADD_PRINT"
              headers={printHeaders}
              items={props.prints}
            />
          )}
          {resourceType === "backgrounds" && (
            <Section
              resourceType="backgrounds"
              formName="ADD_BG"
              headers={backgroundHeaders}
              items={props.backgrounds}
            />
          )}
          {resourceType === "zines" && (
            <Section
              resourceType="zines"
              formName="ADD_ZINE"
              headers={zineHeaders}
              items={props.backgrounds}
            />
          )}
        </div>
      </div>
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
