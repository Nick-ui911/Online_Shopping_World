import React from 'react'

const DownloadSection = () => {
  return (
    <section className="download-app-section">
    <div className="container">
      <div className="app-info">
        <img
          src="https://alphasilver.productsalphawizz.com/uploads/booking.png"
          alt="Mobile App"
          className="app-image"
        />
        <div className="app-details">
          <h1>Download App Now!</h1>
          <p>
            Use code <span className="highlight">WELCOMEMMT</span> and get{" "}
            <span className="highlight">FLAT 12% OFF*</span> on your first
            domestic flight booking.
          </p>
        </div>
      </div>
      <div className="app-download">
        <div className="store-links">
          <a href="#">
            <img
              src="https://jetsetterindia.com/uploads/appstore/appstore-image.png"
              alt="Download on App Store"
              className="store-image"
            />
          </a>
          <a href="#">
            <img
              src="https://jetsetterindia.com/uploads/appstore/playstore-image.png"
              alt="Get it on Google Play"
              className="store-image"
            />
          </a>
        </div>
        <div className="qr-code">
          <img
            src="https://jetsetterindia.com/uploads/appstore/QRCodeDT_QR-code.jpg"
            alt="QR Code"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default DownloadSection
