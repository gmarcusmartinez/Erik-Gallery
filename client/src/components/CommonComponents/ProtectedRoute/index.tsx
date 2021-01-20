import { IAdmin } from 'interfaces';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export interface IProps extends RouteProps {
  currentUser: IAdmin | null;
}

export const PRoute: React.FC<IProps> = (props) => {
  let redirectPath = '';
  if (!props.currentUser) redirectPath = '/';

  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};
