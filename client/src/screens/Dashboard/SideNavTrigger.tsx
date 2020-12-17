import React from "react";
import { ReactComponent as CrossIcon } from "assets/cross.svg";

interface IProps {
  cb: Function;
  bool: boolean;
}
const SideNavTrigger: React.FC<IProps> = ({ cb, bool }) => {
  const className = `dashboard__sidenav__trigger ${bool ? "" : "rotate"}`;

  return (
    <div className={className} onClick={() => cb(bool)}>
      <CrossIcon className="cross-icon" />
    </div>
  );
};

export default SideNavTrigger;
