import React from "react";

interface IProps {
  cb: Function;
  bool: boolean;
}
const SideNavTrigger: React.FC<IProps> = ({ cb, bool }) => {
  const className = `dashboard__sidenav__trigger ${bool ? "" : "rotate"}`;

  return (
    <div className={className} onClick={() => cb(bool)}>
      &#x271D;
    </div>
  );
};

export default SideNavTrigger;
