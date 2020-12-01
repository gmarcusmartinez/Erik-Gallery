import React, { FC, ChangeEvent } from "react";

interface IProps {
  label: string;
  name: string;
  value: string | number;
  options: any[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: FC<IProps> = (props) => {
  const { label, value, name, onChange, options } = props;

  const renderOptions = (opts: any[]) =>
    opts.map((opt, i) => <option key={i}>{opt}</option>);

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
