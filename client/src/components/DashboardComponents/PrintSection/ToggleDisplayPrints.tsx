import React from "react";

interface IProps {
  bool: boolean;
  toggle: Function;
}
const ToggleDisplayPrints: React.FC<IProps> = ({ bool, toggle }) => {
  const triggerClass = `display-prints-trigger ${bool ? "" : "flip"}`;

  return (
    <div className={triggerClass} onClick={() => toggle(!bool)}>
      Prints <span> &#94;</span>
    </div>
  );
};

export default ToggleDisplayPrints;
