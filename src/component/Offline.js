import React from "react";

const Offline = () => {
  const handleRetry = () => {
    if (navigator.onLine) {
      window.location.reload();
    } else {
      alert("You are still offline. Please check your connection.");
    }
  };

  return (
    <div className="offline-container">
      <h1> 🚫 You are offline</h1>
      <p>Please check your internet connection.</p>
      <button onClick={handleRetry} className="retry-button">
        Retry
      </button>
      <p className="offline-tips">Here are some tips:</p>
      <ul>
        <li>Check your Wi-Fi settings.</li>
        <li>Try moving closer to your router.</li>
        <li>Restart your device if necessary.</li>
      </ul>
    </div>
  );
};

export default Offline;
