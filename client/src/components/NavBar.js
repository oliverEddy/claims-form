import { Link } from "react-router-dom";
import "./NavBar.css";


const Navbar = () => {
  return (
    <>
      <nav className="nav">
        
        <Link to="/home"></Link>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/account-details">Account details</Link>
          </li>
          <li>
            <Link to="/claims-form">Make a claim</Link>
          </li>
          <li>
            <Link to="/existing-claims">Existing claims</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
