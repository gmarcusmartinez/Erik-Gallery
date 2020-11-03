import React from "react";

const MainLayout: React.FC = ({ children }) => {
  const backgroundImage = `url(https://lh3.googleusercontent.com/rNpoeeAsGMe2wBbcMHJbsnixLLSdi0cwGR_BikTTSgTMGRPpqDAmn0bcmRJGsYAcOOxRHLycid7qWh9wRnOwo34vuddxxeh7XDqCDVYezqYr_7O4C7nPF83I1ZixAD1yvusI3AS-ww=w2400)`;

  return (
    <div className="main-layout" style={{ backgroundImage }}>
      {children}
    </div>
  );
};

export default MainLayout;
