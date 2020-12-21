import React from "react";
import { connect } from "react-redux";
import MainLayout from "layouts/MainLayout";
import { logout } from "store/actions/auth/logout";

interface IProps {
  logout: Function;
}

const Logout: React.FC<IProps> = ({ logout }) => {
  React.useEffect(() => {
    logout();
  }, [logout]);
  return (
    <MainLayout>
      <div className="logout-screen">
        <div className="logout-screen__info">
          <p>Signing you out bb</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default connect(null, { logout })(Logout);
