import React from "react";
import MainLayout from "../../layouts/MainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <div className="contact-screen">
        <p>Personal Email: erik.felfalusi@gmail.com</p>
        <p>Booking Email: hereticsx555@gmail.com</p>
        <p>Phone:+407 42233365</p>
        <p>
          Social:
          <a
            href="https://www.instagram.com/1000bodies/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram
          </a>
        </p>
      </div>
    </MainLayout>
  );
};

export default Contact;
