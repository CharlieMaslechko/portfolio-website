
import React from 'react'

//Components
import { TypingHero } from './TypingHero'
import { NightSkyCanvas } from './NightSky';
import { Sun } from './Sun'

import { DarkLightModeContext } from '../DarkLightContext'; 

import MountainBackgroundNight from '../images/MountainBackgroundNight.png';
import MountainBackgroundDay from '../images/MountainBackgroundDay.png';
import "./styles/HomePageStyle.css"

export const HomePage = () => {
  const { websiteTheme, setWebsiteTheme } = React.useContext(DarkLightModeContext);
  
    return (
        <div class="sky">
          <Sun/>
          <img src={websiteTheme == "Dark" ? MountainBackgroundNight : MountainBackgroundDay} class="mountain-background"/>
          <div class="glow-div"></div>
          <NightSkyCanvas />
          <div class="hero-div">
            <TypingHero/>
          </div>
        </div>
      );
}