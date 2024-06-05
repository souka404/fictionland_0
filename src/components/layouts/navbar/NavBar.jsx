import logoImage from "assets/logo.jpg";
import menuImage from "assets/menu.png";
import searchImage from "assets/search.jpg";
import "./NavBar.css"

function NavBar() {
  return (
    <div className="navbar">
      <div className="menu">
        <img src={menuImage} alt="" />
      </div>
      <div className="search-bar">
        <img src={searchImage} alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="logo">
        <img src={logoImage} alt="" />
      </div>
    </div>
  );
}export default NavBar