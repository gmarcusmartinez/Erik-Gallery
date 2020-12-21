import React from "react";
import MainLayout from "layouts/MainLayout";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="notfound-screen">
        <div className="notfound-screen__info">
          <p>Sorry we can not find this page</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
