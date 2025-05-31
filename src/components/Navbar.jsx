import "../styles/Navbar.css";
import logo from "../assets/logo.svg";
function Navbar({ navigateRegister }) {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="Logo" />
        <div className="navbar-registernow" onClick={navigateRegister}>
          Register Now{" "}
        </div>
      </div>
    </>
  );
}

export default Navbar;
