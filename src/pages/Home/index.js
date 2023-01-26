import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './main.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import 'animate.css';




const data = [
  {
     image: 'https://i.imgur.com/IGIEO39.jpeg', 
     
    },
    {
      image:'https://i.imgur.com/9gW0YR6.jpeg', 
      
    },
    {
      image:'https://i.imgur.com/ANiCRai.jpeg', 
      
    } 
  ]
  
  
  
  
  export default function Home() {

    
    
    return (
      <div className="homeContainer">

        <div className="homeText">       
          {/* <p className="homeText"> */}

          <h1 className="largeLogo animate__animated animate__bounce animate__delay-2s">Stop Jockin</h1>

          <p className="subtext">Fine Cuts, Classic New Orleans style snoBalls, and other Stop Jockin products and services</p>
        </div>


        <Carousel fade controls={false} indicators={false}>
            {data.map((slide, i) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide.image}
                    alt="slider image"
                  />
                </Carousel.Item>
                )
              })
            }
        </Carousel>


      </div>
        );
      }
 
    




  {/* <div className="homeContainer  ">
    </div>  */}