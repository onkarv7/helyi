import React from "react";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="title1">
        Helyi <span className="title2">SMART Store</span>
      </div>
      <div className="subtitle1">
        Helyi is now building a new-era SMART Store throughout India
      </div>
      <div className="bg">
        <div className="home-img">
          <img src={require("../../assets/home.png")} alt="" />
        </div>
        <div className="home-bg1">
          <img src={require("../../assets/bg1.png")} alt="" />
        </div>
        <div className="home-bg2">
          <img src={require("../../assets/bg2.png")} alt="" />
        </div>
      </div>
      <div className="second-title">About Helyi</div>
      <div className="second-subtitle">
        Helyi is one and only player in this technologically growing rural
        distribution space. At Helyi, we are redefining service provision
        <br />
        in collaboration with Local stores and shops.
      </div>
      <div className="container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="container container2">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Homepage;
