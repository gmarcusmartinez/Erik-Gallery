import React, { ChangeEvent } from "react";
import { IError } from "../../../interfaces";

interface IProps {
  label: string;
  name: string;
  className?: string;
  value: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: IError | null | undefined;
  required?: boolean;
}

const CustomInput: React.FC<IProps> = (props) => {
  const { required, className } = props;
  const isRequired = required ? <span className="is-required">*</span> : null;
  const inputClassName = className ? className : "text-input";

  return (
    <div className={inputClassName}>
      <input
        type={props.type ? props.type : "text"}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      <label className="text-input__label">
        {props.label}
        {isRequired}
      </label>

      {props.error && <div className="input-error">{props.error.message}</div>}
    </div>
  );
};

export default CustomInput;
