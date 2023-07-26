import React from 'react'
import "./EventsCard.css"

const EventsCard = (props) => {
  return (
    <>
    <div class="card card12 ">
          <img class="m-auto img-fluid img-fluid12 p-2" src="https://i.postimg.cc/SKQq1t7X/datawiz.png" alt="NTH logo" />
          <div class="card-body card-body12">
            <h5 class="card-title fs-4 text-center">{props.shortname}</h5>
            <div class="btnc">
              <button class="btn detail" data-bs-toggle="modal"
                data-bs-target="#NTH-Modal">Info</button>
              <button class="btn reg">Register Here</button>
            </div>
          </div>
        </div>

        <div class="modal fade" id="NTH-Modal" tabindex="-1" role="dialog"
          aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content text-light">
              <div class="modal-header">
                <h4>{props.name}</h4>
                <button type="button" class="close" data-bs-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body min-h-20 d-flex">
                <div class="nav flex-column justify-content-evenly nav-pills m-1"
                  id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a class=" mbtn active" id="v-pils-home-tab" data-bs-toggle="pill"
                    href="#v-pills-home-NTH" role="tab" aria-controls="v-pills-home"
                    aria-selected="true">Details</a>
                  <a class=" mbtn" id="v-pills-profile-tab" data-bs-toggle="pill"
                    href="#v-pills-profile-NTH" role="tab"
                    aria-controls="v-pills-profile" aria-selected="false">Rules</a>
                  <a class=" mbtn" id="v-pills-messages-tab" data-bs-toggle="pill"
                    href="#v-pills-messages-NTH" role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false">Contact</a>
                </div>
                <div class="tab-content m-2" id="v-pills-tabContent">
                  <div class="tab-pane fade show active" id="v-pills-home-NTH"
                    role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <p id="dtext">{props.detail}</p>
                    <h5>Timings: </h5>
                    <p>00/00/00 00:00AM to 00/00/00 00:00 PM</p>
                  </div>
                  <div class="tab-pane fade" id="v-pills-profile-NTH"
                    role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <p id="Rules">{props.rules}</p>
                  </div>
                  <div class="tab-pane fade" id="v-pills-messages-NTH"
                    role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <p id="Save">{props.contacts}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default EventsCard