import { useState } from "react";
const Nick = ({ description, isVisible, setIsVisible }) => {
  return (
    <div className="accordion-item">
      <button onClick={setIsVisible} className="accordion-button">
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const About1 = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div className="accordion-container">
      <h1>Organization Name : Alphawizz</h1>
      <h2>About :</h2>
      <Nick
        description="This is a description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isVisible={visibleSection === "show1"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "show1" ? null : "show1")
        }
      />
<h2>Employee Details :</h2>
<Nick
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isVisible={visibleSection === "show2"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "show2" ? null : "show2")
        }
      />
    </div>
  );
};
export default About1;
