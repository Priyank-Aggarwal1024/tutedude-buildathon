import "../styles/AboutHackathon.css";
import buildathonImg from "../assets/buildathon.png";
function AboutHackathon() {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={buildathonImg} alt="Buildathon" />
        </div>
        <div className="about-right">
          <div className="about-right-top">
            <span>What Is </span>
            <span className="fw-700"> Buildathon?</span>
          </div>
          <div className="about-right-bottom">
            Buildathon is an online 72 hour sprint where engineers, designers
            and builders will work on their innovative ideas and build crazy
            shit together.{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHackathon;
