import { useEffect } from "react";
import './snoball.css'
import { useRef } from 'react';
import 'animate.css';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';

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

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel className="snoballCarousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={950000}>
          {/* <img
            className="d-block w-40"
            src="https://i.imgur.com/IGIEO39.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            
          </Carousel.Caption> */}
          <div className="snowballMenuContainer">

          <h1 className="snowballMenu">Menu</h1>

          <h3>Sno-Balls</h3>
          
          <div className="snoballItems">
          <ul>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
          </ul>
          </div>
          <br/>
            <h3>Food</h3>
        <br/>
          <div className="foodList">
          <ul>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
          </ul>
          </div>
          <br/>
            <h3>Flavors</h3>
        <br/>
          <div className="flavors">
          <ul>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
            <li>icecream</li>
          </ul>
          </div>
          </div>

        </Carousel.Item>
        <Carousel.Item interval={950000}>
          <img
            className="d-block w-40"
            src="https://i.imgur.com/IGIEO39.jpeg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={950000}>
          <img
            className="d-block w-40"
            src="https://i.imgur.com/IGIEO39.jpeg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }






export default function SnoBall() {
  

      
      

    return (
      <div className="snoballContainer">
            <div class="animate__animated animate__bounceIn animate__delay-1s ">
            <h5>Stop Jockin Snoballs</h5>
            </div>
        (<ControlledCarousel />);
        <div className="snoballBG">


            <svg id="visual" viewBox="0 0 1950 950" width="1950" height="950" xmlns="http://www.w3.org/1950/svg"
    version="1.1">
    <rect x="0" y="0" width="1950" height="950" fill="#212121"></rect>
    <defs>
        <linearGradient id="grad1_0" x1="64.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#ff5c5d" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#ff5c5d" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad1_1" x1="64.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#ff5c5d" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#cf5250" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad1_2" x1="64.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#a14744" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#cf5250" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad1_3" x1="64.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#a14744" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#753b38" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad1_4" x1="64.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#4a2f2c" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#753b38" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad1_5" x1="64.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#4a2f2c" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#212121" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad2_0" x1="0%" y1="0%" x2="35.7%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#ff5c5d" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#ff5c5d" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad2_1" x1="0%" y1="0%" x2="35.7%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#cf5250" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#ff5c5d" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad2_2" x1="0%" y1="0%" x2="35.7%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#cf5250" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#a14744" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad2_3" x1="0%" y1="0%" x2="35.7%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#753b38" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#a14744" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad2_4" x1="0%" y1="0%" x2="35.7%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#753b38" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#4a2f2c" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad2_5" x1="0%" y1="0%" x2="35.7%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#212121" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#4a2f2c" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <g transform="translate(1950, 0)">
        <path id="blob1" 
            d="M0 442C-49.5 388.7 -99.1 335.4 -118.6 286.4C-138.2 237.4 -127.7 192.6 -181.7 181.7C-235.7 170.8 -354.2 193.8 -408.4 169.1C-462.5 144.5 -452.2 72.3 -442 0L0 0Z"
            fill="#362827"></path>
        <path id="blob2"
            d="M0 368.3C-41.3 323.9 -82.6 279.5 -98.9 238.7C-115.1 197.8 -106.4 160.5 -151.4 151.4C-196.5 142.4 -295.2 161.5 -340.3 141C-385.4 120.4 -376.9 60.2 -368.3 0L0 0Z"
            fill="#5f3532"></path>
        <path id="blob3"
            d="M0 294.7C-33 259.1 -66.1 223.6 -79.1 190.9C-92.1 158.3 -85.1 128.4 -121.2 121.2C-157.2 113.9 -236.2 129.2 -272.2 112.8C-308.3 96.3 -301.5 48.2 -294.7 0L0 0Z"
            fill="#8a413e"></path>
        <path id="blob4"
            d="M0 221C-24.8 194.4 -49.5 167.7 -59.3 143.2C-69.1 118.7 -63.9 96.3 -90.9 90.9C-117.9 85.4 -177.1 96.9 -204.2 84.6C-231.2 72.3 -226.1 36.1 -221 0L0 0Z"
            fill="#b84c4a"></path>
        <path id="blob5"
            d="M0 147.3C-16.5 129.6 -33 111.8 -39.5 95.5C-46.1 79.1 -42.6 64.2 -60.6 60.6C-78.6 56.9 -118.1 64.6 -136.1 56.4C-154.2 48.2 -150.7 24.1 -147.3 0L0 0Z"
            fill="#e75757"></path>
        <path id="blob6"
            d="M0 73.7C-8.3 64.8 -16.5 55.9 -19.8 47.7C-23 39.6 -21.3 32.1 -30.3 30.3C-39.3 28.5 -59 32.3 -68.1 28.2C-77.1 24.1 -75.4 12 -73.7 0L0 0Z"
            fill="#ff5c5d"></path>
    </g>
    <g transform="translate(0, 950)">
        <path id="blob7"
            d="M0 -442C67.9 -437.8 135.9 -433.7 159.2 -384.3C182.5 -335 161.2 -240.4 205.1 -205.1C248.9 -169.7 358 -193.5 408.4 -169.1C458.7 -144.8 450.4 -72.4 442 0L0 0Z"
            fill="#362827"></path>
        <path id="blob8"
            d="M0 -368.3C56.6 -364.9 113.2 -361.4 132.7 -320.3C152.1 -279.2 134.3 -200.4 170.9 -170.9C207.4 -141.4 298.3 -161.2 340.3 -141C382.3 -120.7 375.3 -60.3 368.3 0L0 0Z"
            fill="#5f3532"></path>
        <path id="blob9"
            d="M0 -294.7C45.3 -291.9 90.6 -289.1 106.1 -256.2C121.7 -223.3 107.5 -160.3 136.7 -136.7C166 -113.1 238.7 -129 272.2 -112.8C305.8 -96.6 300.2 -48.3 294.7 0L0 0Z"
            fill="#8a413e"></path>
        <path id="blob10"
            d="M0 -221C34 -218.9 67.9 -216.8 79.6 -192.2C91.3 -167.5 80.6 -120.2 102.5 -102.5C124.5 -84.8 179 -96.7 204.2 -84.6C229.4 -72.4 225.2 -36.2 221 0L0 0Z"
            fill="#b84c4a"></path>
        <path id="blob11"
            d="M0 -147.3C22.6 -145.9 45.3 -144.6 53.1 -128.1C60.8 -111.7 53.7 -80.1 68.4 -68.4C83 -56.6 119.3 -64.5 136.1 -56.4C152.9 -48.3 150.1 -24.1 147.3 0L0 0Z"
            fill="#e75757"></path>
        <path id="blob12"
            d="M0 -73.7C11.3 -73 22.6 -72.3 26.5 -64.1C30.4 -55.8 26.9 -40.1 34.2 -34.2C41.5 -28.3 59.7 -32.2 68.1 -28.2C76.5 -24.1 75.1 -12.1 73.7 0L0 0Z"
            fill="#ff5c5d"></path>
    </g>


</svg>

        </div>
        
      </div>
        
        
        )

    }