import React, { ChangeEvent } from "react";
import { IError } from "../../../interfaces";

interface IProps {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: IError | null | undefined;
  required?: boolean;
}

const CustomInput: React.FC<IProps> = ({
  label,
  name,
  value,
  type,
  onChange,
  error,
  required,
}) => {
  const isRequired = required ? <span className="is-required">*</span> : null;

  return (
    <div className="text-input">
      <input
        type={type ? type : "text"}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label className="text-input__label">
        {label}
        {isRequired}
      </label>

      {error && <div className="input-error">{error.message}</div>}
    </div>
  );
};

export default CustomInput;
