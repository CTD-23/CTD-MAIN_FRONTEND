import React from 'react'
import "./EventsCard.css"
import axiosInstance from '../../utils/apis'
import { useNavigate } from 'react-router'
const EventsCard = (props) => {

  const navigate = useNavigate();

  const registerEvent = (e) => {

    if (!localStorage.getItem("isLogin") || !localStorage.getItem("userEmail")) {
      alert("Please login to continue")
      navigate("/")
    }
    else {
      const eventName = e.target.name;
      const email = localStorage.getItem("userEmail")
      const userEmail = {
        "email1": email,
      }

      const eventEndpoint = `api/register/indi/${eventName}/`

      axiosInstance.post(eventEndpoint, userEmail)
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message)
          }
          else {
            alert("Registration Failed")
          }
        })
        .catch((error) => {
          alert(error.response.data.error)
        })
    }
  }

  const obj = props.rules.split("\n");

  return (
    <>
      <div class="card card12 ">
        <img class="m-auto img-fluid img-fluid12 p-2" src={props.imageUrl} alt="NTH logo" />
        <div class="card-body card-body12">
          <h5 class="card-title fs-4 text-center">{props.shortname}</h5>
          <div class="btnc">
            <button class="btn detail" data-bs-toggle="modal"
              data-bs-target={`#${props.shortname}`}>Info</button>
            <button class="btn reg" name={props.shortname} onClick={registerEvent}>Register Here</button>
          </div>
        </div>
      </div>
      

      <div class="modal fade eventModal" id={`${props.shortname}`} tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content text-light">
          <div class="modal-header">
            <h4>{props.eventName}</h4>
            <a class="close bg-none dark text-white" data-bs-dismiss="modal"
            aria-label="Close"><span aria-hidden="true" class="closebtn" >&#xF659;</span></a>
          </div>
          <div class="modal-body min-h-20 d-flex">
            <div class="eventCardNav nav flex-sm-column flex-row justify-content-evenly nav-pills m-1"
              id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a class=" mbtn active" id="v-pils-home-tab" data-bs-toggle="pill"
                href={`#v-pills-home-${props.shortname}`} role="tab" aria-controls="v-pills-home"
                aria-selected="true">Details</a>
              <a class=" mbtn" id="v-pills-profile-tab" data-bs-toggle="pill"
                href={`#v-pills-profile-${props.shortname}`} role="tab"
                aria-controls="v-pills-profile" aria-selected="false">Rules</a>
              <a class=" mbtn" id="v-pills-messages-tab" data-bs-toggle="pill"
                href={`#v-pills-message-${props.shortname}`} role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false">Contact</a>
            </div>
            <div class="tab-content m-2" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id={`v-pills-home-${props.shortname}`}
                role="tabpanel" aria-labelledby="v-pills-home-tab">
                <p id="dtext">{props.details}</p>
                <p>{props.timings}</p>
              </div>
              <div class="tab-pane fade" id={`v-pills-profile-${props.shortname}`} role="tabpanel"
                aria-labelledby="v-pills-profile-tab">
                <p id="Rules">
                {
                      obj.map((rule) => {
                        return <span>
                          {rule}
                          <br />
                        </span>
                      })
                    }
                </p>
              </div>
              <div class="tab-pane fade" id={`v-pills-message-${props.shortname}`}
                role="tabpanel" aria-labelledby="v-pills-messages-tab">
                <p id="Save" className='contactSection'>{props.contact}</p>
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

// "https://i.postimg.cc/SKQq1t7X/datawiz.png"