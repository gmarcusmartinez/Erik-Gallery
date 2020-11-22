import React from "react";
import MainLayout from "../../layouts/MainLayout";

const Sound = () => {
  React.useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <MainLayout>
      <div className="sound-screen">
        <div className="sound-screen__info">
          <p>1000 Bodies</p>
          <a
            href="https://www.facebook.com/1thousandbodies/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Facebook
          </a>
          <a
            href="https://soundcloud.com/1000bodies"
            rel="noopener noreferrer"
            target="_blank"
          >
            SoundCloud
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

export default Sound;
