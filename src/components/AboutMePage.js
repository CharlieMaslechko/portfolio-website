import React from "react"
import { ShowcaseDisplay } from "./ShowcaseDisplay"
import { NightSkyCanvas } from "./NightSky"
import "./styles/AboutMePageStyle.css"
import ProfilePhoto from "../images/ProfilePhoto.png"

export const AboutMePage = () => {
    return (
        <div>
            <div class="background">
                <NightSkyCanvas/>
            </div>
            <div class="forground">
                <h1> About me </h1>
                <img src={ProfilePhoto} class="profile-photo"/>
                <p> My name is Charlie and I am a 23 year old software engineer from Vancouver. I graduated from Computer Engineering in 2022 and I currently work at Jane App as a software engineer. I love learning new technologies and building with them. I like playing sports like hockey and soccer, camping and hiking. I like cars and boats and creating configurations that I can't afford (right now). I have experience building in most programming languages but my professional experience includes mainly Ruby on Rails, Java, React, Go, and Python.  </p>
                <h2> My Professional Experience </h2>
                <ShowcaseDisplay/>
            </div>
        </div>
    )
}