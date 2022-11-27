import React from "react";

const EventListElement = (props: { event: any }) => {
  return (
    <div className="border-b-2 m-2">
      <h1 className="text-varvunvihrea text-[20px]">
        {props.event.name}
      </h1>
      <p className="text-[15px] mx-1">
        {props.event.occasionType}
      </p>
      <p className="text-[15px]  mx-1">
        { `${props.event.startDate.substring(0, props.event.startDate.indexOf('T'))} - ${props.event.endDate.substring(0, props.event.endDate.indexOf('T'))}` }
      </p>
    </div>
  )
}
export default EventListElement