const AuthInput = ({ placeholder, name, value, type, onChange, error }) => {
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
