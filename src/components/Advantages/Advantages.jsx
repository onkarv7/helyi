import React from "react";

import "./Advantages.css";

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="title advantage-title">Advantages of Helyi</div>
      <div className="subtitle advantage-subtitle">
        Helyi stands on its four pillars that holds the foundation stone of
        Helyi’s coming customer focused services. We believe in
        <br />
        adhering to all the strong points we have been working on from long time
        now.
      </div>
      <div className="cards">
        <div>
          <div className="cards-img">
            <img src={require("../../assets/card1.png")} alt="" />
          </div>
          <p>Digitalizing the Stores</p>
        </div>
        <div>
          <div className="cards-img">
            <img src={require("../../assets/card2.png")} alt="" />
          </div>
          <p>Streamlined Vendor & Supplier Payment</p>
        </div>
        <div>
          <div className="cards-img">
            <img src={require("../../assets/card3.png")} alt="" />
          </div>
          <p>Sell Financial Products & Earn Extra Income</p>
        </div>
        <div>
          <div className="cards-img">
            <img src={require("../../assets/card4.png")} alt="" />
          </div>
          <p>Buy Products in Competitive Price</p>
        </div>
        <div>
          <div className="cards-img">
            <img src={require("../../assets/card5.png")} alt="" />
          </div>
          <p>Customer Rewards</p>
        </div>
        <div>
          <div className="cards-img">
            <img src={require("../../assets/card6.png")} alt="" />
          </div>
          <p>Best Customer Service</p>
        </div>
        <div>
          <div className="cards-img">
            <img src={require("../../assets/card7.png")} alt="" />
          </div>
          <p>Easy Inventory Management</p>
        </div>
        <div>
          <div className="cards-img">
            <img src={require("../../assets/card8.png")} alt="" />
          </div>
          <p>Get easy loans</p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
