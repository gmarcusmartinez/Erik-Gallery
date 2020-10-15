import React from "react";
import Spinner from "components/Spinner";

interface WithSpinnerProps {
  isLoading: boolean;
}

export default (WrappedComponent: any) => {
  const hocComponent: React.FC<WithSpinnerProps> = ({ isLoading, ...props }) =>
    isLoading ? <Spinner /> : <WrappedComponent {...props} />;

  return hocComponent;
};
