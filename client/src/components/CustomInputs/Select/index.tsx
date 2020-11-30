import React, { FC, ChangeEvent } from "react";

interface IProps {
  elHeight?: string;
  label: string;
  name: string;
  value: string | number;
  options: any[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: FC<IProps> = ({
  elHeight,
  label,
  name,
  value,
  options,
  onChange,
}) => {
  const height = elHeight ? elHeight : "4rem";
  const renderOptions = (opts: any[]) =>
    opts.map((opt, i) => <option key={i}>{opt}</option>);

  return (
    <div className="custom-select" style={{ height }}>
      <label>{label}</label>

      <select value={value} name={name} onChange={onChange}>
        {renderOptions(options)}
      </select>
    </div>
  );
};

export default CustomSelect;
