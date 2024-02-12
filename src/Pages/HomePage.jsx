import React from "react";
import "../Styles/Home.css";
import img from "../assets/Saly-13.png";
import bootstrap from "../assets/Vector (7).png";
import html5 from "../assets/Group 6 (1).png";
import html3 from "../assets/Group 5.png";
import js from "../assets/Group 7.png";
import javascript from "../assets/logos_javascript.png";
import react from "../assets/Vector (9).png";
import profile from "../assets/Ellipse 2.png";
import gitup from "../assets/Vector (12).png";
import mail from "../assets/Group 11.png";
import sending from "../assets/Vector (8).png";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="text-white">
        <Navbar />
        <div className="container">
        <div className="d-lg-flex justify-content-between  align-items-center">
          <div className="Landing-Page">
            <h5>Full Stack Developer</h5>
            <h1 className="mt-5 mt-lg-3">Halimat .A. Usman</h1>
            <p className="lh-base" style={{fontSize:"18px"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha
              tortor consequat nibh gravida id sit. Quis eget diam ut proin. At
              nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros
              dolor eget. Orci in enim sit luctus lacus arcu.
            </p>
            <div className="d-flex gap-lg-5 gap-3">
              <img src={bootstrap} alt="" />
              <img src={js} alt="" />
              <img src={html5} alt="" />
              <img src={javascript} alt="" />
              <img src={react} alt="" className="reactlogo"/>
              <img src={html3} alt="" />
            </div>

          </div>
          
           
            <img src={img} alt="" className="img-fluid Landing-Page-img"/>
          
        </div>
        <div className="d-flex align-items-center gap-lg-5 gap-4" >
              <img src={profile} alt="" />
              <Link target="blank" className="text-white text-decoration-none d-flex align-items-center gap-1 gap-lg-3">
                <div className="email  d-flex align-items-center gap-1 gap-lg-3">
                  <Link to="/https://login.yahoo.com/?.src=ym&lang=en-US&done=https%3A%2F%2Fmail.yahoo.com%2F">
                <img src={mail} alt="" />
                </Link>
                Email Me
                <img src={sending} alt="" />
                </div>
              </Link>
              <Link  target="blank" className="text-white text-decoration-none">
                <div className="git  d-flex align-items-center gap-1 gap-lg-3">
                <img src={gitup} alt="" />
                Github
                <img src={sending} alt="" />
                </div>
              </Link>
            </div>
            </div>
      </div>
    </>
  );
};

export default HomePage;