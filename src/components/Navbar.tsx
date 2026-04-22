import { LuFileDown } from "react-icons/lu";
import "./styles/Navbar.css";
import HoverLinks from "./HoverLinks";

const Navbar = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Kaushal_Agrawal_Resume.pdf";
    link.download = "Kaushal_Agrawal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          KA
        </a>
        <a
          href="mailto:kaushal.agrawal0606@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          kaushal.agrawal0606@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
          <li>
            <button
              onClick={handleResumeDownload}
              className="navbar-resume-btn"
              data-cursor="disable"
              title="Download Resume"
            >
              <LuFileDown className="resume-icon" />
              <HoverLinks text="RESUME" />
            </button>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
