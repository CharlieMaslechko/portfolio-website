import React from "react"
import "./styles/NavBarStyle.css"
import { Slider } from "./Slider"
import { DarkLightModeContext } from "../DarkLightContext"
import { Link } from "react-router-dom"
import { FormCheck } from "react-bootstrap"



export const NavBar = () => {

  const { websiteTheme, setWebsiteTheme } = React.useContext(DarkLightModeContext);
  const [hamburgerClicked, setHamburgerClicked] = React.useState(false)

  const handleChange = () => {
    setHamburgerClicked((prev) => (!prev))
  }

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
        <Link to="/projects" className="no-underline">MY PROJECTS </Link>
        <Link to="/about" className="no-underline">MY RESUME </Link>
        <Link to="/athletics" className="no-underline">MY ATHLETICS </Link>
        <Slider/>
      </nav>
      <div class="hamburger-menu">
        <div class="hamburger-lines-holder"> 
          <input class="hamburger-checkbox" type="checkbox" onChange={handleChange}/>
          <div class={"line1"} id="l1"> </div>
          <div class={"line2"} id="l2"> </div>
          <div class={"line3"} id="l3"> </div>
        </div>
      </div>
    </div>
  )
}