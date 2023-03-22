import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import "./main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "animate.css";
import { InlineWidget } from "react-calendly";

const data = [
  {
    image: "https://i.imgur.com/PeC7bGH.jpg",
  },
  {
    image: "https://i.imgur.com/pwKaKdw.jpg",
  },
  {
    image: "https://i.imgur.com/WGqnzr5.jpg",
  },
  {
    image: "https://i.imgur.com/CRSmoHv.jpg",
  },
  {
    image: "https://i.imgur.com/hHwIO8a.jpg",
  },
];

export default function Barbershop() {
  return (
    <>
      <div className="barberContainer">
        <div className="menu">
          <div className="barberPics">
            <Carousel fade controls={false} indicators={false}>
              {data.map((slide, i) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block h-20"
                      src={slide.image}
                      alt="slider image"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <div className="pricing">
            <ul>
              <li>Any type of Fade(Tuesday-Saturday)</li>
              <aside>$30</aside>
              <li>Lining/Edge Up</li>
              <aside>$30</aside>
              <li>Kids Haircuts (5 and under)</li>
              <aside>$20</aside>
              <li>Kids Haircuts (6 through 14)</li>
              <aside>$15</aside>
              <li>Beard Trim with Lining/Edge Up</li>
              <aside>$30</aside>
              <li>Hair Shampoo</li>
              <aside>$50</aside>
              <li>Hair Line Restoration (SMP)</li>
              <aside>$300</aside>
            </ul>
          </div>
        </div>
      </div>

      <p className="needACut">
        Need a cut?
        <Link to="/Appointment">
          <button className="button-74">Hit us up!</button>
        </Link>
      </p>
    </>
  );
}
