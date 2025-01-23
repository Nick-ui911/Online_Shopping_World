import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { TbShoppingCartCancel } from "react-icons/tb";

const BelowDownloadSection = () => {
  return (
    <div className="trending-container  ">
      <section className="freedel-sec">
        <div className="info-row">
          {/* Fast Shipping */}
          <div className="info-box">
            <div className="icon-container">
              <FaShippingFast className="icon" />
            </div>
            <h4>Fast Shipping</h4>
            <p>Fast shipping at your doorstep.</p>
          </div>

          {/* Free Returns */}
          <div className="info-box">
            <div className="icon-container">
              <TbShoppingCartCancel className="icon" />
            </div>
            <h4>Free Returns</h4>
            <p>Free return if products are damaged.</p>
          </div>

          {/* Support 24/7 */}
          <div className="info-box">
            <div className="icon-container">
              <BiSupport className="icon" />
            </div>
            <h4>Support 24/7</h4>
            <p>24/7 and 365 days support is available.</p>
          </div>

          {/* Seller Login */}
          <div className="info-box">
            <a
              href="https://alphasilver.productsalphawizz.com/seller/login"
              className="seller-login-link"
            >
              <div className="icon-container">
                <FaArrowRight className="icon" />
              </div>
              <h4>Seller Login</h4>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BelowDownloadSection;
