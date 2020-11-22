import React from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const MainLayout: React.FC = ({ children }) => {
  const backgroundImage = `url(https://lh3.googleusercontent.com/rNpoeeAsGMe2wBbcMHJbsnixLLSdi0cwGR_BikTTSgTMGRPpqDAmn0bcmRJGsYAcOOxRHLycid7qWh9wRnOwo34vuddxxeh7XDqCDVYezqYr_7O4C7nPF83I1ZixAD1yvusI3AS-ww=w2400)`;

  React.useEffect(() => {
    window.scrollTo(0, 0);
    disableBodyScroll(document.querySelector(".main-layout")!);
    return () => enableBodyScroll(document.querySelector(".main-layout")!);
  }, []);

  return (
    <div className="main-layout">
      <div className="main-bg" style={{ backgroundImage }}></div>
      {children}
    </div>
  );
};

export default MainLayout;
