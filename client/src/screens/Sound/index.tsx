import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Sound = () => {
  React.useEffect(() => {
    disableBodyScroll(document.querySelector(".main-content")!);
    return () => enableBodyScroll(document.querySelector(".main-content")!);
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
