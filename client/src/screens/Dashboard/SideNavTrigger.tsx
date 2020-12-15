import React from "react";

interface IProps {
  cb: Function;
  bool: boolean;
}
const SideNavTrigger: React.FC<IProps> = ({ cb, bool }) => {
  const className = `dashboard__sidenav__trigger ${bool ? "" : "rotate"}`;

  return (
    <div className={className} onClick={() => cb(bool)}>
      &#10013;
    </div>
  );
};

export default SideNavTrigger;
