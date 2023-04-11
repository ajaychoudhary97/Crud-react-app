import React from 'react';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarReact = () => {
  return (
    <>
            <div className='main-div'>
            <hr className='line1'/>
            <label className="label1">Appointment Timeline</label>

                <input type='text' className='search-bar' placeholder='Search Patient'/>    

             <hr/>   
            </div>
            


        <div>
            <Fullcalendar 
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                    start: "",
                    center: "prev,title,next",
                    end: "timeGridDay,timeGridWeek,dayGridMonth"
                }}
                
            
            />


        </div>

    
    </>
  )
}

export default CalendarReact