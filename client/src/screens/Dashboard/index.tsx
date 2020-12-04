import React, { FC } from "react";
import { connect } from "react-redux";
import { fetchPrints } from "store/actions/prints/fetchPrints";
import { fetchBackgrounds } from "store/actions/backgrounds/fetchBackgrounds";
import { fetchResourceLinks, printHeaders } from "./headers";
import Section from "components/DashboardComponents/Section";
import { IPrint } from "interfaces";

interface IProps {
  fetchPrints: Function;
  prints: IPrint[];
}
const Dashboard: FC<IProps> = ({ fetchPrints, prints }) => {
  const [sidenavOpen, setSideNavOpen] = React.useState(false);
  const [resourceType, setResourceType] = React.useState("");

  const sidenavClass = sidenavOpen ? "sidenav-open" : "sidenav-closed";
  const resourcesClass = sidenavOpen ? "resources-closed" : "resources-open";

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
    switch (resource) {
      case "prints":
        setSideNavOpen(false);
        setResourceType("prints");
        fetchPrints();
    }
  };

  return (
    <>
      <div className="dashboard">
        <div className={`dashboard__sidenav ${sidenavClass}`}>
          <span
            className="dashboard__sidenav__trigger"
            onClick={() => setSideNavOpen(!sidenavOpen)}
          >
            &#9655;
          </span>
          <div className="dashboard__sidenav__links">{sidenavLinks}</div>
        </div>
        <div className={` dashboard__resources ${resourcesClass}`}>
          {resourceType === "prints" && (
            <Section
              resourceType="prints"
              formName="ADD_PRINT"
              headers={printHeaders}
              items={prints}
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
