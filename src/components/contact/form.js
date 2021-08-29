import React from "react";

export default function ContactForm() {
  return (
    <form className="mb-5 mt-5 mt-lg-0">
      <div className="">
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="exampleInputName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputMessage" className="form-label">
          Message
        </label>
        <textarea
          rows={4}
          type="email"
          className="form-control"
          id="exampleInputMessage"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
