import { useState } from "react";

const Nick = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="accordion-item">
      <button
        onClick={setIsVisible}
        className="accordion-button"
        aria-expanded={isVisible ? "true" : "false"}
        aria-controls={title}
      >
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
      {isVisible && (
        <div id={title} className="accordion-content">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

const About1 = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div className="accordion-container">
      <h1 className="organization-title">Organization Name: <span className="highlight-text">Alphawizz</span></h1>
      <h2>About the Organization:</h2>
      <Nick
        title="about"
        description="Alphawizz is a leading tech company focusing on innovation and quality in the software industry. Our mission is to provide cutting-edge solutions to our clients while maintaining a work environment that encourages growth and creativity."
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "about" ? null : "about")
        }
      />
      <h2>Employee Details:</h2>
      <Nick
        title="employees"
        description="We are a dynamic and diverse team at Alphawizz, passionate about technology and driven to make an impact in the world. Our employees come from various backgrounds, bringing a wealth of experience and unique perspectives to the company."
        isVisible={visibleSection === "employees"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "employees" ? null : "employees")
        }
      />
    </div>
  );
};

export default About1;
