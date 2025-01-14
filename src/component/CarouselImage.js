import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const CarouselImage = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://alphasilver.productsalphawizz.com/uploads/media/2024/847497sdgiuashdgihasio8.jpg"
            className="d-block w-100"
            alt="img1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://alphasilver.productsalphawizz.com/uploads/media/2024/7mdfskoasdhgoihgio047805.png"
            className="d-block w-100"
            alt="img2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://alphasilver.productsalphawizz.com/uploads/media/2024/bannar.jpg"
            className="d-block w-100"
            alt="img3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselImage;
