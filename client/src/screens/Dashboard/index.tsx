import React, { FC } from "react";
import { connect } from "react-redux";
import { adminFetchPrints } from "store/actions/prints/adminFetchPrints";
import { fetchBackgrounds } from "store/actions/backgrounds/fetchBackgrounds";
import { fetchZines } from "store/actions/zines/fetchZines";
import * as headers from "./headers";
import Section from "components/DashboardComponents/Section";
import { IBackground, IPrint, IZine } from "interfaces";
import SideNavTrigger from "./SideNavTrigger";

interface IProps {
  adminFetchPrints: Function;
  prints: IPrint[];
  fetchBackgrounds: Function;
  backgrounds: IBackground[];
  fetchZines: Function;
  zines: IZine[];
}
const Dashboard: FC<IProps> = (props) => {
  const [sidenavOpen, setSideNavOpen] = React.useState(true);
  const [resourceType, setResourceType] = React.useState("");

  const sidenavClass = sidenavOpen ? "sidenav-open" : "sidenav-closed";

  const sidenavLinks = headers.fetchResourceLinks.map((l, i) => (
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
        return props.adminFetchPrints();
      case "backgrounds":
        return props.fetchBackgrounds();
      case "zines":
        return props.fetchZines();
    }
  };

  return (
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
            headers={headers.printHeaders}
            items={props.prints}
            gridTemplateColumns="10% 31% 15% 7% 7% 7% 7%"
          />
        )}
        {resourceType === "backgrounds" && (
          <Section
            resourceType="backgrounds"
            formName="ADD_BG"
            headers={headers.backgroundHeaders}
            items={props.backgrounds}
            gridTemplateColumns="15% 15% 15%"
          />
        )}
        {resourceType === "zines" && (
          <Section
            resourceType="zines"
            formName="ADD_ZINE"
            headers={headers.zineHeaders}
            items={props.zines}
            gridTemplateColumns="10% 32% 8% 8% 8% 8% 8%"
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  prints: state.prints.items,
  backgrounds: state.backgrounds.items,
  zines: state.zines.items,
});

export default connect(mapStateToProps, {
  adminFetchPrints,
  fetchBackgrounds,
  fetchZines,
})(Dashboard);
