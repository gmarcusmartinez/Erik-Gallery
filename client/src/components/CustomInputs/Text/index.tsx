import React, { ChangeEvent } from "react";
import { IError } from "../../../interfaces";

interface IProps {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: IError | null | undefined;
}

const CustomInput: React.FC<IProps> = ({
  label,
  name,
  value,
  type,
  onChange,
  error,
}) => {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input
        type={type ? type : "text"}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="input-error">{error.message}</div>}
    </div>
  );
};

export default CustomInput;
