import React from "react";
import logo from "../../assets/logo.png";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function NavBar() {
  // const navigate = useNavigate()

  // const go2Home = () => {
  //   navigate("/")
  // }

  // const go2Shipping = () => {
  //   navigate("/shipping")
  // }

  // const go2Promotions = () => {
  //   navigate("/promotions")
  // }

  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <li>
          <Link to="/">
            <img /*onClick={go2Home}*/ src={logoHenry} alt="logo-henry" />
            <img /*onClick={go2Home}*/ src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <h1 /*onClick={go2Home}*/>Central de Cruceros</h1>
          </Link>
        </li>
        <div className={styleNav.options}>
          <li>
            <Link to="/shipping">
              <span /*onClick={go2Shipping}*/>Navieras</span>
            </Link>
          </li>
          <li>
            <Link to="/promotions">
              <span /*onClick={go2Promotions}*/>Promociones</span>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
