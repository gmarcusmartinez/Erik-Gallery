import React, { ChangeEvent } from "react";

interface IProps {
  placeholder: string;
  name: string;
  value: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: { message: string };
}

const AuthInput: React.FC<IProps> = ({
  placeholder,
  name,
  value,
  type,
  onChange,
  error,
}) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type ? type : "text"}
        className="auth-input"
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="input-error">{error.message}</div>}
    </div>
  );
};

export default AuthInput;
