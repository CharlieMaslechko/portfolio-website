import React from "react"
import { DarkLightModeContext } from "../DarkLightContext"

import "./styles/SunStyle.css"

export const Sun = () => {
    const {websiteTheme, setWebsiteTheme} = React.useContext(DarkLightModeContext)


    return (
        <div class={websiteTheme == "Dark"? "sun-holder-night" : "sun-holder-day"}>
            <div class="sun"></div>
            <div class="ray-box">
                <div class="ray1"> </div>
                <div class="ray2"> </div>
                <div class="ray3"> </div>
                <div class="ray4"> </div>
                <div class="ray5"> </div>
                <div class="ray6"> </div>
                <div class="ray7"> </div>
                <div class="ray8"> </div>
            </div>
        </div>
    )
}