import React from "react";
import { Link } from "react-router-dom";
import logo from "./Assets/Asset 16@4x.png"
const Header = () => {
    return <header>
        <Link to="/"><img src={logo} alt="logo" /></Link>
    </header>
}
export default Header;