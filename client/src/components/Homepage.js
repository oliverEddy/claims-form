import "./Homepage.css";
import LogInButton from "./LogInButton";
// import homeImg from "./ensure-logo.svg";

const Homepage = () => {
  return (
    <>
      <div className="home-container">
      <h1>Keeping the unexpected, uncomplicated</h1>
      <img src="ensurepic.jpg" alt="pic of healthy active family" className="home-pic"/>
      <p>Leading the industry in Trust, Wellbeing, Safety, Compassion</p>
      <br></br>
      <p>
        At enSURE we believe every person has the right to insurance that is
        easy to understand, will cover them for what they need, and is easiy
        available when they need it.
      </p>
      <br></br>
      <p>
        Our Advisors are professionals with specialist knowledge to assist you
        in selecting and tailoring your cover to suit your individual
        circumstances. All of our staff are experienced and trained to best help
        and support you in your time of need.
      </p>
      <button className="login-button">{LogInButton}Log In</button>
      </div>
    </>
  );
};

export default Homepage;
