import "./Events.css"
import EventsCard from '../../components/EventsCard/EventsCard'
import { events } from './EventData'
const Events = () => {
  
  return (
    < >
      <h1 className=" text-center h12 fade-in">EVENTS</h1>

    { (
      <div className="cardc mb-sm-5">
        {
          events.map((event)=>{
            return <EventsCard
            key = {event.key}
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
      
    </>
  )
}

export default Events