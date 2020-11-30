import React, { FC, ChangeEvent } from "react";

interface IProps {
  name: string;
  label: string;
  value: string | number;
  options: any[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: FC<IProps> = ({
  name,
  label,
  value,
  options,
  onChange,
}) => {
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
