import "./Homepage.css";
import LogInButton from "./LogInButton";
// import homeImg from "./ensure-logo.svg";

const Homepage = () => {
  return (
    <>
      <h1>Keeping the unexpected, uncomplicated</h1>
      <div className="home-container">
        <div className="center-home-pic">
          <img
            src="ensurepic.jpg"
            alt="pic of healthy active family"
            className="home-pic"
          />
        </div>
        <p>Leading the industry in Trust, Wellbeing, Safety, Compassion
          Our Advisors are professionals with specialist knowledge to assist you
          in selecting and tailoring your cover to suit your individual
          circumstances. All of our staff are experienced and trained to best
          help and support you in your time of need.
        </p>
        <button className="login-button">{LogInButton}Log In</button>
      </div>
    </>
  );
};

export default Homepage;
