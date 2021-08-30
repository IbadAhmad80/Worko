import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineMail, AiFillContacts } from "react-icons/ai";

export default function SocialLinks() {
  return (
    <div className="pb-4">
      <div className="d-flex flex-column">
        <div className="d-flex">
          <i className="text-warning h-25 fs-3">
            <FaLocationArrow />
          </i>
          <div className="mx-4">
            <h5 className="fs-5 fw-bolder ">Location :</h5>
            <h6>A108 Adam Street, New York, NY 535022</h6>
          </div>
        </div>

        <div className="d-flex py-4">
          <i className="text-warning h-25 fs-2">
            <AiOutlineMail />
          </i>
          <div className="mx-4">
            <h5 className="fs-5 fw-bolder">Email :</h5>
            <h6>info@example.com</h6>
          </div>
        </div>

        <div className="d-flex">
          <i className="text-warning h-25 fs-2">
            <AiFillContacts />
          </i>
          <div className="mx-4">
            <h5 className="fs-5 fw-bolder">Contact :</h5>
            <h6>+1 5589 55488 55s</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
