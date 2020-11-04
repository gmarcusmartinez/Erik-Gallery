import React from "react";
import MainLayout from "../../layouts/MainLayout";

const Sound = () => {
  return (
    <MainLayout>
      <div className="sound-screen">
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
    </MainLayout>
  );
};

export default Sound;
