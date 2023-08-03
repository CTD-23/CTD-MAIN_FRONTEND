import React from 'react'
import "./ContactUs.css";
import Contacts from "./Contact";
import Contactcard from '../../components/ContactCard/ContactCard';

const ContactUs = () => {

  return (
    <div>
      <div className="heading text-center mt-sm-4 mt-4">
        <h1 className="heading fade-in">Get In Touch With Us</h1>
      </div>
      <div className="container-fluid containercard">
        <div className="row singlerow gx-5 fade-in">

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