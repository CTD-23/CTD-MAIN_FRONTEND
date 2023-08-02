import React from "react";
import { useState } from "react";
import { data } from "../../teamData";
import OurTeamCard from "../../components/OurTeamCard/OurTeamCard";
import "./OurTeam.css";

const OurTeam = () => {

  return (
    <div className="container">
      <h2 className="text-white ourTeamTitle text-center fade-in mt-4 mt-sm-3 mb-0 mb-sm-0 fs-1">Who we are</h2>
      <div className="container p-3">
        <div className="container-fluid p-sm-4 p-2 ">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-0">
            <div className="col colu mb-5">
              <div className="effect p-1 p-sm-1">
                <div className="p-4">
                  <img
                    className="card-img-top fade-in"
                    src="https://i.postimg.cc/FsWSGd3v/Virat-Kohli22-06-2021-06-42-06.png"
                  />
                </div>

                <h5 className="card-title text-white text-center">
                  Virat Kohli
                </h5>
                <p className="card-title text-white text-center">
                  Front-end Developer
                </p>

                <div className="text-white text-center mb-3">
                  <i className="bi bi-linkedin mx-2"></i>
                  <i className="bi bi-instagram mx-2"></i>
                </div>
              </div>
            </div>

            <div className="col colu mb-5">
              <div className="effect p-1">
                <div className="p-4">
                  <img
                    className="card-img-top fade-in"
                    src="https://i.postimg.cc/FsWSGd3v/Virat-Kohli22-06-2021-06-42-06.png"
                  />
                </div>

                <h5 className="card-title text-white text-center">
                  Virat Kohli
                </h5>
                <p className="card-title text-white text-center">
                  Front-end Developer
                </p>

                <div className="text-white text-center mb-3">
                  <i className="bi bi-linkedin mx-2"></i>
                  <i className="bi bi-instagram mx-2"></i>
                </div>
              </div>
            </div>

            <div className="col colu mb-5">
              <div className="effect p-1">
                <div className="p-4">
                  <img
                    className="card-img-top fade-in"
                    src="https://i.postimg.cc/FsWSGd3v/Virat-Kohli22-06-2021-06-42-06.png"
                  />
                </div>

                <h5 className="card-title text-white text-center">
                  Virat Kohli
                </h5>
                <p className="card-title text-white text-center">
                  Front-end Developer
                </p>

                <div className="text-white text-center mb-3">
                  <i className="bi bi-linkedin mx-2"></i>
                  <i className="bi bi-instagram mx-2"></i>
                </div>
              </div>
            </div>

            <div className="col colu mb-5">
              <div className="effect p-1">
                <div className="p-4">
                  <img
                    className="card-img-top fade-in"
                    src="https://i.postimg.cc/FsWSGd3v/Virat-Kohli22-06-2021-06-42-06.png"
                  />
                </div>

                <h5 className="card-title text-white text-center">
                  Virat Kohli
                </h5>
                <p className="card-title text-white text-center">
                  Front-end Developer
                </p>

                <div className="text-white text-center mb-3">
                  <i className="bi bi-linkedin mx-2"></i>
                  <i className="bi bi-instagram mx-2"></i>
                </div>
              </div>
            </div>

            <div className="col colu mb-5">
              <div className="effect p-1">
                <div className="p-4">
                  <img
                    className="card-img-top fade-in"
                    src="https://i.postimg.cc/FsWSGd3v/Virat-Kohli22-06-2021-06-42-06.png"
                  />
                </div>

                <h5 className="card-title text-white text-center">
                  Virat Kohli
                </h5>
                <p className="card-title text-white text-center">
                  Front-end Developer
                </p>

                <div className="text-white text-center mb-3">
                  <i className="bi bi-linkedin mx-2"></i>
                  <i className="bi bi-instagram mx-2"></i>
                </div>
              </div>
            </div>

            <div className="col colu  mb-5">
              <div className="effect p-1">
                <div className="p-4">
                  <img
                    className="card-img-top fade-in"
                    src="https://i.postimg.cc/FsWSGd3v/Virat-Kohli22-06-2021-06-42-06.png"
                  />
                </div>

                <h5 className="card-title text-white text-center">
                  Virat Kohli
                </h5>
                <p className="card-title text-white text-center">
                  Front-end Developer
                </p>

                <div className="text-white text-center mb-3">
                  <i className="bi bi-linkedin mx-2"></i>
                  <i className="bi bi-instagram mx-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
