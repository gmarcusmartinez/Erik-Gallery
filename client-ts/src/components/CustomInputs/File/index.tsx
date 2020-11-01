import React from "react";

interface IProps {
  onChange: any;
}

const CustomFileInput: React.FC<IProps> = ({ onChange }) => {
  return (
    <div className="custom-file-input-wrapper">
      <input
        className="custom-file-input"
        type="file"
        accept="image/*"
        onChange={onChange}
      />
      <label className="file-input-label">Chose an Image</label>
    </div>
  );
};

export default CustomFileInput;
