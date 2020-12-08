import React from "react";

interface IProps {
  cb: Function;
  bool: boolean;
}
const SideNavTrigger: React.FC<IProps> = ({ cb, bool }) => {
  const className = `dashboard__sidenav__trigger ${bool ? "" : "rotate"}`;

  return (
    <span className={className} onClick={() => cb(bool)}>
      &#9654;
    </span>
  );
};

export default SideNavTrigger;
