import React from "react";
import { Image } from "react-bootstrap";
import { team_data } from "./TeamData";

export default function Team() {
  return (
    <div className="pt-5">
      <div className="container pt-5">
        <h6 className="text-muted text-decoration-uppercase fs-4 m-0 section-title">
          TEAM
        </h6>
        <strong className=" fs-2 fw-bolder ">CHECK OUR TEAM</strong>
      </div>
      <div className="container-xxl mb-5 pt-5 g-0">
        <div className="card-deck g-0 row row-cols-sm-3 row-cols-md-4 row-cols-lg-5 gy-4 mx-2 mx-sm-0 d-flex justify-content-center ">
          {team_data.map((member) => {
            return <SingleTeamMember member={member} key={member.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

function SingleTeamMember({ member: { name, image, post } }) {
  return (
    <div className="card text-center mx-2 service-card">
      <Image
        className="card-img-top "
        fluid
        src={`/assets/img/team/${image}.jpg`}
      />

      <div className="card-body">
        <strong className="card-title fs-5 mb-1 d-inline-block ">{name}</strong>
        <p className="card-text  mb-2 text-muted">{post}</p>
      </div>
    </div>
  );
}
