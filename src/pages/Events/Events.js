import React, { useEffect, useState } from 'react'
import "./Events.css"
import EventsCard from '../../components/EventsCard/EventsCard'
import axiosInstance from '../../utils/apis'
import { events } from './EventData'
const Events = () => {
  
  return (
    < div className='fade-in'>
      <h1 class=" text-center h12 fade-in">EVENTS</h1>

    { (
      <div class="cardc mb-sm-5">
        {
          events.map((event)=>{
            return <EventsCard
            imageUrl={event.imageUrl}
            shortname = {event.shortname}
            eventName = {event.eventName}
            details = {event.details}
            timings = {event.timings}
            rules = {event.rules}
            contact = {event.contact}
            />
          })
        }
      </div>

    )
      

    }
      
    </div>
  )
}

export default Events