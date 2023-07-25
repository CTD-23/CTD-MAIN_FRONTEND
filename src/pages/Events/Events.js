import React from 'react'
import "./Events.css"
import EventsCard from '../../components/EventsCard/EventsCard'
const Events = () => {
  const data = [
    {
      key:0,
      shortname:"hello",
      name:"hello",
      detail:"hello",
      rules:"hello",
      contacts:"hello"
    },
    {
      key:1,
      shortname:"hello",
      name:"hello",
      detail:"hello",
      rules:"hello",
      contacts:"hello"
    },
    {
      key:2,
      shortname:"hello",
      name:"hello",
      detail:"hello",
      rules:"hello",
      contacts:"hello"
    },
    {
      key:3,
      shortname:"hello",
      name:"hello",
      detail:"hello",
      rules:"hello",
      contacts:"hello"
    },
  ]
  return (
    <>
      <h1 class="text-light text-center ">EVENTS</h1>


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