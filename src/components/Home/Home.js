import React, { createContext, useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserEvents } from '../../App';
import EventsCard from '../EventsCard/EventsCard';


export default function Home() {
   const [events, setEvents] = useState([]);

  useEffect(() =>{
     fetch('https://vast-caverns-87711.herokuapp.com/events')
     .then(res => res.json())
     .then(data => setEvents(data))
  }, [])

  return (
    <div>
         {
             events.map(eve => <EventsCard key={eve._id} event={eve}></EventsCard> )
         }
    </div>
  );
}