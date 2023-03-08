import { useEffect } from "react";

import { useRef } from 'react';
import 'animate.css';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";

//image imports
import crawFries from './snoBallphotos/crawFishFries.jpg'
import friedShrimp from './snoBallphotos/friedShrimp.jpg'
import shrimpFries from './snoBallphotos/somefriesthing1.PNG'
import crawFishNachos from './snoBallphotos/crawFishNachos.jpg'
import snowBall1 from './snoBallphotos/snowBall1.jpg'
import snowBall2 from './snoBallphotos/snowball2.jpg'
import snowBall3 from './snoBallphotos/snowball3.jpg'
import snowBall4 from './snoBallphotos/snowball4.jpg'


export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const [hover1, setOver] = useState(false);
    const [hover2, setOver2] = useState(false);
    const [hover3, setOver3] = useState(false);
    const [hover4, setOver4] = useState(false);

    
  
    return (
      <Carousel className="snoballCarousel" activeIndex={index} onSelect={handleSelect} indicators={false}>
        <Carousel.Item interval={950000} >

          <div className="snowballMenuContainer">

          <h1 className="snowballMenu">Menu</h1>

          <h3>Sno-Balls</h3>
          
          <div className="snoballItems">
          <ul>
            <li>Kiddie 8 oz $1</li>
            <li>Small 12oz $2</li>
            <li>Medium 16oz $3</li>
            <li>Large 20oz $4</li>
            <li>The Stop Jockin 32oz $5</li>
          </ul>
          </div>
          <br/>
            <h3>Food</h3>
        <br/>
          <div className="foodList">
          <ul>
            <li>Shrimp on Bun</li>
            <li>Shrimp Nachos</li>
            <li>Nachos & Cheese (w/chilli + .50)</li>
            <li>Shrimp Fries</li>
            <li>Chilli Dogs (w/cheese + .50)</li>
          </ul>
          </div>
          <br/>
            <h3>Flavors</h3>
        <br/>
          <div className="flavors">
          <ul>
            <li>Strawberry</li>
            <li>Chocolate</li>
            <li>Watermelon</li>
            <li>Daiquiri</li>
            <li>King Cake</li>
            <li>Tiger's Blood</li>
            <li>Birthday Cake</li>
            <li>Margarita</li>
            <li>and many more!</li>
          </ul>
          </div>
          </div>

        </Carousel.Item>
        <Carousel.Item interval={950000}>

          <div class="foodImagesContainer">
          <h1>Media</h1>
            <div class="column">
            <img onMouseOver={() => setOver3(true)}
                    onMouseOut={() => setOver3(false)} 
                    src={hover3 ? snowBall1 : snowBall2}
                        alt="snowBall2"/>
              <img onMouseOver={() => setOver2(true)}
                    onMouseOut={() => setOver2(false)} 
                    src={hover2 ? crawFishNachos : friedShrimp}
                        alt="crawFries"/>
              
              
            </div>

            <div class="column">
            
              <img onMouseOver={() => setOver(true)}
                    onMouseOut={() => setOver(false)} 
                    src={hover1 ? shrimpFries : crawFries}
                        alt="crawFries"/>
              <img onMouseOver={() => setOver4(true)}
                    onMouseOut={() => setOver4(false)} 
                    src={hover4 ? snowBall3 : snowBall4}
                        alt="crawFries"/>
              

            </div>

          </div>

  

        </Carousel.Item>
        <Carousel.Item interval={950000}>
          <div className="snoBallVideo">
          <h1>About</h1>
          <YoutubeEmbed embedId="vQQvxMvtOVw" />
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }