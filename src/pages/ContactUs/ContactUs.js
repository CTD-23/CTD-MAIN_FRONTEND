import React from 'react'
import "./ContactUs.css";
import Contacts from "./Contact";
import Contactcard from '../../components/ContactCard/ContactCard';

const ContactUs = () => {

  return (
    <div>
      <div class="heading text-center mt-sm-4 mt-4">
        <h1 class="heading fade-in">Get In Touch With Us</h1>
      </div>
      <div class="container-fluid containercard">
        <div class="row singlerow gx-5 fade-in">

          {Contacts.map((contact) => {
            return<Contactcard 
              name={contact.name} 
              contactnumber={contact.contactnumber} 
              key={contact.key} 
              image={contact.image} 
             />
          })}

        </div>
      </div>
          <div className="mb-5"></div>

    </div>
  )

}

export default ContactUs;