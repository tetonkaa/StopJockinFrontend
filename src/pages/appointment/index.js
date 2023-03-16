import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main.css'
import { InlineWidget } from "react-calendly";


export default function Appointment() {
 


    return (
  
        <div className="AppointmentContainer">
        
       <InlineWidget url="https://calendly.com/angel-l-puente" 
        pageSettings={{
        backgroundColor: '#fffff',
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: '00a2ff',
        textColor: '4d5055',
          }}
        styles={{
            height: '75vh'
        }
        } />
        
        </div>

    )
}