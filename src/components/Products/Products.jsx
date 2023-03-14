import React from "react";
import "./products.css";

const Products = () => {
  return (
    <div>
      <div className="title">Our Products & Services</div>
      <div className=" product-subtitle">
        Helyi SMART Store offers a wide range of services ranging from daily
        needs, groceries to haircuts,etc. in collaboration with various industry
        leaders to become a one stop solution to all customer needs and
        requirements.
      </div>
      <div className="product">
        <div>
          <img src={require("../../assets/product.png")} alt="" />
        </div>
        <div className="sub">
          <div>
            <div className="subproduct">
              <img src={require("../../assets/product1.png")} alt="" />

              <div>Large Applinces</div>
            </div>
            <div>
              <div className="subproduct">
                <img src={require("../../assets/product2.png")} alt="" />

                <div>Household Appliances</div>
              </div>
              <div className="subproduct">
                <img src={require("../../assets/product3.png")} alt="" />

                <div>Pharmaceuticals</div>
              </div>
              <div className="subproduct">
                <img src={require("../../assets/product4.png")} alt="" />

                <div>Groceries</div>
              </div>
            </div>
          </div>
          <div>
            <div className="subproduct">
              <img src={require("../../assets/product5.png")} alt="" />

              <div>Recharges</div>
            </div>
            <div className="subproduct">
              <img src={require("../../assets/product6.png")} alt="" />

              <div>Food & Restaurants</div>
            </div>
            <div className="subproduct">
              <img src={require("../../assets/product7.png")} alt="" />

              <div>Local Services</div>
            </div>
            <div className="subproduct ">
              <img
                className="image"
                src={require("../../assets/product8.png")}
                alt=""
              />

              <div>Bill Payments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
