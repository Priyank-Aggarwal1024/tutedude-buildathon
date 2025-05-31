import "../styles/JoinGroup.css";
import logo3 from "../assets/logo3.png";
import jwg from "../assets/jwg.png";
function JoinGroup() {
  return (
    <>
      <div className="join-group">
        <img src={logo3} alt="Tutedude Logo" className="joingroup-logo" />
        <div className="join-group-main">
          <h2 className="join-group-heading">
            <span>Welcome to </span>
            <span className="fw-700">TuteDude Hackathon</span>
          </h2>
          <div className="join-group-para">
            Join Upskillmafia Whatsapp Group Below to Get all Live Updates
            (Please Add Your Team Member in the Group after Joining)
          </div>
          <img src={jwg} alt="Join Whatsapp Group" className="join-group-jwg" />
        </div>
      </div>
    </>
  );
}

export default JoinGroup;
