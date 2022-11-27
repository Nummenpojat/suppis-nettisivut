import React, {useEffect, useState} from "react";
import axios from "axios";
import EventListElement from "./eventListElement";

const EventsWrapper = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
    axios.get("https://kuksaseuranta.nummenpojat.fi/api/v1/events/")
      .then((response) => {
        setEvents(response.data.events)
      })
  }, [])

  const handleSearch = (event: any) => {
    axios.get(`https://kuksaseuranta.nummenpojat.fi/api/v1/events/search/${event.target.value}`)
      .then((response) => {
        setEvents(response.data.events)
      })
  }

  return (
    <div className="w-screen flex place-content-center">
      <main className="w-1/2 h-[calc(100vh-120px)] min-w-[500px]">
        <h1 className="text-center text-[35px]">TAPAHTUMAT</h1>
        <input className="bg-gray-100 w-full rounded-[5px] p-1 mt-5 mx-5" type="text" placeholder=" Hae tapahtumaa..." onChange={handleSearch}/>
        <div className="bg-gray-100 w-full rounded-[5px] p-1 mx-5 my-4">
          {
            events.map((event: any) => <EventListElement event={event}/>)
          }
        </div>
      </main>
    </div>
  )
}
export default EventsWrapper