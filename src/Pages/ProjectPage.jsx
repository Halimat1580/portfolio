import React from "react";
import "../Styles/ProjectPage.css";
import { Link } from "react-router-dom";
import Dash from "../assets/Vector 1 (1).png";
import profile from "../assets/Ellipse 2.png";
import gitup from "../assets/Vector (12).png";
import sending from "../assets/Vector (8).png";
import ProjectStore from "../Components/ProjectStore";
import mail from "../assets/Group 11.png";
import Download from "../Components/Download";

const ProjectPage = () => {
  return (
    <div>
      <div className="justify-content-between d-lg-flex text-white ">
        <div className="container mb-5">
          <div className="ProjectPage">
            <Link to="/" className="text-decoration-none text-white">
              <h2 className="mb-5">HALIMAT.</h2>
            </Link>
            <h3 className="d-inline px-4 py-1" style={{color: "#F16529",backgroundColor:"#FFFFFF", fontFamily: 'Hammersmith One', fontSize:"18px"}}>Full Stack Developer</h3>
            <h1 style={{fontFamily: 'Hammersmith One', fontSize:"56px"}}>Halimat .A. Usman</h1>
            <p className="lh-base" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha
              tortor consequat nibh gravida id sit. Quis eget diam ut proin. At
              nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros
              dolor eget. Orci in enim sit luctus lacus arcu.
            </p>

            <div className="my-5 pb-3">
              <Link to="/project" className="d-flex gap-3 text-decoration-none text-white">
                  01{" "}
                  <img
                    src={Dash}
                    alt=""
                    className="dash"
                    style={{ fontSize: "2rem", fontWeight: "10px" }}
                  />{" "}
                 <p className="li "> Projects</p>
                
              </Link>
              <Link to="" className="d-flex gap-3 text-decoration-none text-white">
                
                  02{" "}
                  <img
                    src={Dash}
                    alt=""
                    className="dash"
                    style={{ fontSize: "2rem", fontWeight: "10px" }}
                  />{" "}
                  <Download />{" "}
                
              </Link>
              <Link to="/contact" className="d-flex gap-3 text-decoration-none text-white">
                
                  03{" "}
                  <img
                    src={Dash}
                    alt=""
                    className="dash"
                    style={{ fontSize: "2rem", fontWeight: "10px" }}
                  />{" "}
                 <p className="li "> Contacts</p>
              </Link>
            </div>

            <div className="d-flex align-items-center gap-lg-5 gap-4">
              <img src={profile} alt="" />
              <Link
                target="blank"
                className="text-white text-decoration-none d-flex align-items-center gap-1 gap-lg-3"
              >
                <div className="email  d-flex align-items-center gap-1 gap-lg-3">
                  <Link to="https://login.yahoo.com/?.src=ym&lang=en-US&done=https%3A%2F%2Fmail.yahoo.com%2F">
                <img src={mail} alt="" />
                </Link>
                Email Me
                <img src={sending} alt="" />
                </div>
              </Link>
              <Link
                target="blank"
                className="text-white text-decoration-none d-flex align-items-center gap-1 gap-lg-3"
              >
               <div className="git  d-flex align-items-center gap-1 gap-lg-3">
                <img src={gitup} alt="" />
                Github
                <img src={sending} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <ProjectStore />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;