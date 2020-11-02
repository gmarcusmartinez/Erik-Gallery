import React, { ChangeEvent } from "react";

interface IProps {
  name: string;
  label: string;
  value: string;
  options: {}[];
  renderOptions: Function;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: React.FC<IProps> = ({
  name,
  label,
  value,
  options,
  renderOptions,
  onChange,
}) => {
  return (
    <div className="custom-select">
      <label>{label}</label>
      <select value={value} name={name} onChange={onChange}>
        {renderOptions(options)}
      </select>
    </div>
  );
};

export default CustomSelect;
