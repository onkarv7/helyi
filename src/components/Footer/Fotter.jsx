import React from "react";
import "./Footer.css";
const Fotter = () => {
  return (
    <div>
      <div className="get-started">
        <img className="phone" src={require("../../assets/phone.png")} alt="" />
        <div>
          <div className="title" style={{ color: "var(--color-white)" }}>
            Get Started Now!
          </div>
          <div className="subtitle" style={{ color: "var(--color-white)" }}>
            Join Helyi and be a part of this revolution where we connect small
            towns in India!
          </div>
          <div className="app">
            <img
              src={require("../../assets/playsore.png")}
              alt=""
              height={51}
            />
            <img
              src={require("../../assets/appstore.png")}
              alt=""
              height={53}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="footer">
          <div>
            <div className="footer-title">Contact Details</div>
            <div className="footer-subtitle">
              Karthikeya Business Solutions Vijaywada, Andhra Pradesh
              <br />
              <br />
              Pincode: 564 543
              <br />
              <br />
              Tel: +91 98745 66432, 040 3324 4352
              <br /> <br />
              Email: info@helyi.com
            </div>
            <div className="social">
              <img src={require("../../assets/social.png")} alt="" />
            </div>
          </div>
          <div>
            <div className="footer-title">Quick Links</div>
            <div className="links2">
              <a href="#">Home</a>

              <a href="#">Join Us</a>

              <a href="#">Merchant Log In</a>

              <a href="#">Merchant Log In</a>
            </div>
            <div className="footer-app">
              <img
                src={require("../../assets/playsore.png")}
                alt=""
                height={54}
              />
              <img
                src={require("../../assets/appstore.png")}
                alt=""
                height={55}
              />
            </div>
            <div className="copyright">
              Copyright 2020 - All Rights Reserved -Helyi
            </div>
          </div>
          <div>
            <div className="footer-title foot">Subscribe us </div>
            <div className="subscribe">
              <input
                className="input1"
                type="text"
                placeholder="Enter your email id"
              />
              <div className="footer-title foott">Get App on your mobile </div>
              <div>
                <input
                  className="input2"
                  type="text"
                  placeholder="Enter your 10 digit mobile no."
                />
              </div>

              <div>
                <button className="footer-button">Get Link</button>
              </div>
              <div className="TC">
                <span>Privacy Policy</span>
                <span>T&C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-group">
        <img src={require("../../assets/footer.png")} alt="" />
      </footer>
    </div>
  );
};

export default Fotter;
