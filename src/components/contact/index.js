import React from "react";
import ContactForm from "./form";
import SocialLinks from "./social-links";

export default function Contact() {
  return (
    <div className="container pt-5">
      <div className=" py-5">
        <h6 className="text-muted text-decoration-uppercase fs-4 m-0 section-title">
          CONTACT
        </h6>
        <strong className=" fs-2 fw-bolder ">CONTACT US NOW</strong>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <SocialLinks />
        </div>
        <div className="col-xl-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
