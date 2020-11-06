import React from "react";

interface IProps {
  bool: boolean;
  toggle: Function;
  title: string;
}
const ToggleDisplayResource: React.FC<IProps> = ({ bool, toggle, title }) => {
  const triggerClass = `display-resource-trigger ${bool ? "" : "flip"}`;

  return (
    <div className={triggerClass} onClick={() => toggle(!bool)}>
      {title} <span> &#94;</span>
    </div>
  );
};

export default ToggleDisplayResource;
