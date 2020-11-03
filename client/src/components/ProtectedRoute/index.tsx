import React from "react";
import { Redirect, Route, RouteProps } from "react-router";

export interface IProps extends RouteProps {
  currentUser: { role: string };
}

export const PRoute: React.FC<IProps> = (props) => {
  let redirectPath = "";
  if (!props.currentUser || props.currentUser.role !== "admin")
    redirectPath = "/";

  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};
