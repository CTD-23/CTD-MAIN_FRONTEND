import React from 'react'
import "./Events.css"
import EventsCard from '../../components/EventsCard/EventsCard'
const Events = () => {
  const data = [
    {
      key:0,
      shortname:"NCC",
      name:"hello",
      detail:"hello",
      rules:"hello",
      contacts:"hello"
    },
    {
      key:1,
      shortname:"RC",
      name:"hello",
      detail:"hello",
      rules:"hello",
      contacts:"hello"
    },
    {
      key:2,
      shortname:"Datawiz",
      name:"hello",
      detail:"hello",
      rules:"hello",
      contacts:"hello"
    },
  ]
  return (
    <>
      <h1 class="text-light text-center h12">EVENTS</h1>


      <div class="cardc">
        {
          data.map((event)=>{
            return <EventsCard
            shortname = {event.shortname}
            name = {event.name}
            detail = {event.detail}
            rules = {event.rules}
            contacts = {event.contacts}
            />
          })
        }
        
      </div>

    </>
  )
}

export default Events