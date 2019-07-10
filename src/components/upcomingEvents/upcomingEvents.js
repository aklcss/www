import React from "react";
import Section from "../section/section";
import "./upcomingEvents.css";
import Eventimage from "../eventimage/eventimage";

const UpcomingEvents = (props) => (
  <div className="section events">
    <div className="events-holder">
      {/*{props.events.map((event) => console.log(event.featured_photo) || (*/}
      {props.events.map((event) => (

          <a href={event.link} className={`event event-${event.status}`} key={event.name}>
            <Eventimage image={event.featured_photo}/>
            <h3>{event.name} </h3>
            hr: {event.duration / 1000 / 60 / 60} <br/>
            {/*rsvp_limit: {event.rsvp_limit} <br/>*/}
            Confirmed Attendees: {event.yes_rsvp_count} <br/>
            Waitlist: {event.waitlist_count} <br/>


            {/*<img src={event.featured_photo.highres_link} alt=""/>*/}
          </a>
        )
      )}
    </div>
  </div>
);


export default UpcomingEvents;