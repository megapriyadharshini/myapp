import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/Context";

// styles...
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  background: "#eee"
};

const linksStyle = { display: "flex", gap: "10px" };

const navLinkStyle = ({ isActive }) => ({
  padding: "6px 10px",
  borderRadius: "5px",
  textDecoration: "none",
  color: isActive ? "white" : "black",
  background: isActive ? "blue" : "transparent"
});

const Navbar = () => {
  
  // ⭐ use context here
  const { username, counter } = useContext(AppContext);

  return (
    <nav style={navStyle}>
      <h3>MyApp</h3>

      {/* Show context values */}
      <div>
        <p>Welcome: {username}</p>
        <p>Counter: {counter}</p>
      </div>

      <div style={linksStyle}>
        <NavLink style={navLinkStyle} to="/">Home</NavLink>
        <NavLink style={navLinkStyle} to="/about">About</NavLink>
        <NavLink style={navLinkStyle} to="/services">Services</NavLink>
        <NavLink style={navLinkStyle} to="/contact">Contact</NavLink>
        <NavLink style={navLinkStyle} to="/products">Products</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
