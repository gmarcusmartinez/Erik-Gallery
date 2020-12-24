import React, { FC } from "react";
import { connect } from "react-redux";
import { adminFetchPrints } from "store/actions/prints/adminFetchPrints";
import { adminFetchZines } from "store/actions/zines";
import { adminFetchOrders } from "store/actions/orders";
import { fetchBackgrounds } from "store/actions/backgrounds/fetchBackgrounds";
import * as headers from "./headers";
import Section from "components/DashboardComponents/Section";
import { IBackground, IPrint, IZine, IOrder } from "interfaces";
import SideNavTrigger from "./SideNavTrigger";

interface IProps {
  fetchBackgrounds: Function;
  adminFetchPrints: Function;
  adminFetchOrders: Function;
  adminFetchZines: Function;
  backgrounds: IBackground[];
  prints: IPrint[];
  orders: IOrder[];
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
        return props.adminFetchZines();
      case "orders":
        return props.adminFetchOrders();
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <span className="dashboard__title">Admin Dashboard</span>
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
            gridTemplateColumns="10% 12% 12%"
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
        {resourceType === "orders" && (
          <Section
            resourceType="orders"
            headers={headers.orderHeaders}
            items={props.orders}
            gridTemplateColumns="22% 18% 12% 12% 12% 12% 12%"
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  backgrounds: state.backgrounds.items,
  orders: state.orders.items,
  prints: state.prints.items,
  zines: state.zines.items,
});

export default connect(mapStateToProps, {
  fetchBackgrounds,
  adminFetchPrints,
  adminFetchOrders,
  adminFetchZines,
})(Dashboard);
