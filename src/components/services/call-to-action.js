import { Button } from "react-bootstrap";
import React from "react";

export default function CallToAction() {
  return (
    <div className="container-fluid my-5 text-center text-white call-to-action-container">
      <div>
        <h2 className="pt-5 fs-3 fw-bolder ">Call To Action</h2>
        <p className="fs-6 py-1 px-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <a href="#contact">
          <Button
            variant="outline-warning"
            className="mb-5 mt-1 px-4 py-2 fs-5 call-to-action-btn text-white"
          >
            Call To Action
          </Button>
        </a>
      </div>
    </div>
  );
}
