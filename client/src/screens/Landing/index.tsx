import React from "react";
import MainLayout from "layouts/MainLayout";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Landing = () => {
  React.useEffect(() => {
    disableBodyScroll(document.querySelector(".main-content")!);
    return () => enableBodyScroll(document.querySelector(".main-content")!);
  }, []);

  return <MainLayout></MainLayout>;
};

export default Landing;
