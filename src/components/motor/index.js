import React from "react";
import "./motor.css";
import arrow from "../../assets/big-arrow.svg";
import car1 from "../../assets/img-1.png";
import car2 from "../../assets/img-1.png";
import car3 from "../../assets/img-1.png";
import itemarrow from "../../assets/item-arrow.svg";
import grid from "../../assets/grid.svg";
import round from "../../assets/round.svg";
import wrappercar1 from "../../assets/car-1.png";
import star from "../../assets/star.svg";
import wrappercar2 from "../../assets/car-2.png";
import wrappercar3 from "../../assets/car-3.png";
import wrappercar4 from "../../assets/car-4.png";

const MotorComponent = () => {
  return (
    <div>
      <div className="backgroundImg">
        <h3>Home / Motors</h3>
        <h2>Our ranges</h2>
        <h1>Motors</h1>
      </div>
      <div className="main-body-con">
        <div className="sidebar-con">
          <div className="cost-of-car-con">
            <h3 class="h3-style">Cost of car</h3>
            <div class="from-to-con">
              <div>
                <h4>from</h4>
                <input type="text" />
              </div>
              <div>
                <h4>to</h4>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="brand-con">
            <div class="brand-arrow-con h3-style">
              <p>Brand</p>
              <img src={arrow} alt="arrow" />
            </div>
            <div class="aidal-wrapper">
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>Aidal</p>
              </div>
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>Knal</p>
              </div>
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>escape</p>
              </div>
            </div>
          </div>
          <div className="company-con">
            <div class="brand-arrow-con h3-style">
              <p>Company</p>
              <img src={arrow} alt="arrow" />
            </div>
            <div class="aidal-wrapper">
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>escape</p>
              </div>
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>Aidal</p>
              </div>
            </div>
          </div>
          <div className="license-con">
            <div class="brand-arrow-con h3-style">
              <p>License type</p>
              <img src={arrow} alt="arrow" />
            </div>
            <div class="aidal-wrapper">
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>1 year</p>
              </div>
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>2 year</p>
              </div>
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>1.5year</p>
              </div>
            </div>
          </div>
          <div className="number-con">
            <div class="brand-arrow-con h3-style">
              <p>Number of travelers</p>
              <img src={arrow} alt="arrow" />
            </div>
            <div class="aidal-wrapper">
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>2</p>
              </div>
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>3-4</p>
              </div>
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>5+</p>
              </div>
            </div>
          </div>
          <div className="location-con">
            <div class="brand-arrow-con h3-style">
              <p>Location</p>
              <img src={arrow} alt="arrow" />
            </div>
            <div class="aidal-wrapper">
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>Seoul</p>
              </div>
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>Korea</p>
              </div>
              <div class="brand-mini">
                <input type="checkbox" class="checkbox" />
                <p>Pusan</p>
              </div>
            </div>
          </div>
          <div className="button-con">
            <button class="yellow-btn">Cancel</button>
            <button class="blue-btn">Search</button>
          </div>
          <div className="compare-con">
            <p>Compare</p>
            <div className="car-img-con">
              <img src={car1} alt="car-1" />
              <img src={car2} alt="car-2" />
              <img src={car3} alt="car-3" />
            </div>
          </div>
        </div>
        <div class="main-item-con">
          <div class="item-container">
            <div class="item-first-con">
              <div class="item-con">
                <p>Item</p>
                <strong>25.156</strong>
              </div>
              <div class="sort-con-right">
                <div class="sort-con">
                  <p>Sort by</p>
                  <div class="select-con">
                    <input type="select" placeholder="Select" />
                    <img src={itemarrow} alt="item-arrow" />
                  </div>
                  <div class="sixty-con">
                    <input type="select" placeholder="60" />
                    <img src={itemarrow} alt="item-arrow" />
                  </div>
                </div>
                <div class="two-icon-con">
                  <img src={grid} alt="grid-icon" class="img-style" />
                  <img src={round} alt="round-icon" />
                </div>
              </div>
            </div>
          </div>
          <div class="no-show">
            <p>Sort by</p>
            <div class="select-con-2">
              <input type="select" placeholder="Select" />
              <img src={arrow} alt="" />
            </div>
            <div class="sixty-con-2">
              <input type="select" placeholder="60" />
              <img src={arrow} alt="" />
            </div>
          </div>
          <div class="car-wrapper">
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar3} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7500 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar2} alt="car-2" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>6000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar4} alt="car-4" class="car-4-img"/>
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>5500 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar2} alt="car-2" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>6000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>

              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
            <div class="car-one-con">
              <img src={wrappercar1} alt="car-1" />
              <h3>Name of the car</h3>
              <div class="brand-con-main">
                <p>Brand name</p>
                <div class="star-con">
                  <img src={star} alt="star-icon" />
                  <p>5.3</p>
                </div>
              </div>
              <h4>7000 만원</h4>
              <div class="car-btn">
                <button class="order-blue">Order</button>
                <button class="compare-btn">Compare</button>
                <button class="view-detail-btn">View Detail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MotorComponent;
