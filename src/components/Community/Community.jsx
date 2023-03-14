import React from "react";

import "./Community.css";

const Community = () => {
  return (
    <div>
      <div className="title"> Join the Helyi Community</div>
      <div className="subtitle community-subtitle">
        Powering your dreams towards reality
      </div>
      <div className="subtitle community-subtitle2 ">
        If you want to built a
        <span className="community-subhead"> Helyi SMART </span>
        Store around your area, please contact us at
        <span className="community-subhead2"> helyi@smartsupport.in </span>
      </div>
      <button className="button">Register Now</button>
      <div className="title">Our Brands & Partners</div>
      <div className="brand">
        <img src={require("../../assets/brand1.png")} alt="" />
        <img src={require("../../assets/brand2.png")} alt="" />
        <img src={require("../../assets/brand3.png")} alt="" />
        <img src={require("../../assets/brand4.png")} alt="" />
        <img src={require("../../assets/brand1.png")} alt="" />
      </div>
    </div>
  );
};

export default Community;
