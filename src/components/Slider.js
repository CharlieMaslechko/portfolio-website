import React from "react"
import "./styles/SliderStyle.css"
import { DarkLightModeContext } from '../DarkLightContext'; 

export const Slider = () => {

    const { websiteTheme, setWebsiteTheme } = React.useContext(DarkLightModeContext);

    const [isChecked, setIsChecked] = React.useState(false);

    const handleChange = () => {
        setIsChecked((isChecked) => !isChecked)
        if (isChecked) {
            setWebsiteTheme("Dark")
        } else {
            setWebsiteTheme("Light")
        }
    }
    return (
        <label className="slider-holder">
            <input type="checkbox" onChange={handleChange} checked={isChecked}/>
            <span className="slider-back">
                <span className="star" id="s1"></span>
                <span className="star" id="s2"></span>
                <span className="star" id="s3"></span>
                <span className="star" id="s4"></span>
                <span className="cloud" id="c1"></span>
                <span className="cloud" id="c2"></span>
                <span className="cloud" id="c3"></span>
            </span>
            <span className="slider"></span>
        </label>

    )
}