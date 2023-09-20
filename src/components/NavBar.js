import React from "react"
import "./styles/NavBarStyle.css"
import { Slider } from "./Slider"
import { DarkLightModeContext } from "../DarkLightContext"
import { Link } from "react-router-dom"



export const NavBar = () => {

  const { websiteTheme, setWebsiteTheme } = React.useContext(DarkLightModeContext);

  return (
    
    <div class={websiteTheme == "Dark" ? 'nav-container-dark' : 'nav-container-light'}>
      <Link to="/" className="no-underline">
        <div class='logo-container'>
          <div class='logo-heading'> Charlie Maslechko </div>
          <div class='logo-subheading'> Software Engineer | Builder | Learner </div>
        </div>
      </Link>
      <nav class="links-container brackets">
        <Link to="/about" className="no-underline">ABOUT ME </Link>
        <Link to="/about" className="no-underline">MY PROJECTS </Link>
        <Link to="/about" className="no-underline">MY RESUME </Link>
        <Link to="/athletics" className="no-underline">MY ATHLETICS </Link>
        <Slider/>
      </nav>
    </div>
  )
}