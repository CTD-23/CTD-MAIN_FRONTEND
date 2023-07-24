import React from "react";
import "./OurTeamCard.css";
const OurTeamCard = (props) => {
  return (
    <div class="card-container col mb-5">
      <div
        class="effect card-style"
      >
        <div class="p-4">
          <img
            class="card-img-top fade-in img-style image"
            src={props.image}
            
          />
        </div>
        <div class="card-body text-white text-center">
          <h5 class="card-title text-white text-center">{props.name}</h5>
          <p class="card-title text-white text-center">{props.post}</p>
        </div>
        <div class="text-white text-center mb-3">
          <i class="bi bi-linkedin mx-2"></i>
          <i class="bi bi-instagram mx-2"></i>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
