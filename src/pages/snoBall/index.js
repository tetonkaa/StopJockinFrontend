import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './snoball.css'
import Carousel from 'react-bootstrap/Carousel'
import { snoballPics } from "../../assets/snoBallphotos/snoballPics";

const data = [
    {
        image: 'https://i.imgur.com/ZlLrcEv.jpg', 
        
       },
       {
         image:'https://i.imgur.com/hS8ZWHR.jpg', 
         
       },
       {
         image:'https://i.imgur.com/uC1WCOe.jpg', 
         
       },
       {
         image:'https://i.imgur.com/qROEQPs.jpg', 
         
       },
       {
         image:'https://i.imgur.com/X0fbIWv.jpg', 
         
       },  
]



export default function SnoBall() {

    return (
      <div className="lot7Container">

        <div className="lot7Text">
            <p>PAGE UNDER CONSTRUCTION</p>
        <img className="construction"src="https://i.imgur.com/rG4LHzO.gif"/>
        </div>
        
      </div>
        
        
    )
}