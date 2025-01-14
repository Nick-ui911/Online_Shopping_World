import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { TbShoppingCartCancel } from "react-icons/tb";

const BelowDownloadSection = () => {
  return (
    <section className="freedel-sec">
      <div className="row row-fluid dark-footer-margin">
        {/* Fast Shipping */}
        <div className="col-lg-3 col-md-6 text-left text-md-center">
          <div className="custom-column">
            <div className="info-box-wrapper">
              <div className="info-box">
                <div className="icon-box">
                  <FaShippingFast className="icon" />
                </div>
                <div className="info-box-content">
                  <h4 className="info-box-title">Fast Shipping</h4>
                  <p>Fast shipping at your doorstep.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Free Returns */}
        <div className="col-lg-3 col-md-6 text-left text-md-center">
          <div className="custom-column">
            <div className="info-box-wrapper">
              <div className="info-box">
                <div className="icon-box">
                  <TbShoppingCartCancel className="icon" />
                </div>
                <div className="info-box-content">
                  <h4 className="info-box-title">Free Returns</h4>
                  <p>Free return if products are damaged.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support 24/7 */}
        
        <div className="col-lg-3 col-md-6 text-left text-md-center">
          <div className="custom-column">
            <div className="info-box-wrapper">
              <div className="info-box">
                <div className="icon-box">
                  <BiSupport className="icon" />
                </div>
                <div className="info-box-content">
                  <h4 className="info-box-title">Support 24/7</h4>
                  <p>24/7 and 365 days support is available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seller Login */}
        <div className="col-lg-3 col-md-6 text-left text-md-center">
          <div className="custom-column">
            <div className="info-box-wrapper">
              <div className="info-box">
                <div className="login-link">
                  <a href="https://alphasilver.productsalphawizz.com/seller/login">
                    <div className="cta">
                      <div className="icon-box">
                        <FaArrowRight className="icon" />
                      </div>
                      <div className="cta-text">
                        <h4>Seller Login</h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BelowDownloadSection;
