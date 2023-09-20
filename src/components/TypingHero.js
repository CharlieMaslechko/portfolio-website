import React from "react"
import "./styles/HeroStyle.css"

import { DarkLightModeContext } from "../DarkLightContext"

export const TypingHero = () => {

    const { websiteTheme, setWebsiteTheme } = React.useContext(DarkLightModeContext);

    const pretext = "Hi, i'm Charlie, I like to "
    const rotatingText = ["write software", "build things", "learn stuff", "play sports", "drive boats"]
    const minimumTimeBetweenChars = 100
    const randomnessTimeBetweenChars = 300
    const idleTime = 3000

    const [currentText, setCurrentText] = React.useState("")
    //Time between letters
    const [delta, setDelta] = React.useState(100)
    const [rotationIndex, setRotationIndex] = React.useState(0)
    const [deleting, setDeleting] = React.useState(false)
    const [isIdle, setIsIdle] = React.useState(false)
    const [cursorState, setCursorState] = React.useState("|")

    function tick(){

        let textToDisplay = deleting ? rotatingText[rotationIndex].substring(0, currentText.length - 1) : rotatingText[rotationIndex].substring(0, currentText.length + 1)
        setCursorState("|")
        setCurrentText(textToDisplay)

        if (textToDisplay.length == rotatingText[rotationIndex].length){
            setDeleting(true)
            setDelta(idleTime)
            setIsIdle(true)
            return
        } else if (textToDisplay.length == 0){
            rotationIndex === rotatingText.length - 1 ? setRotationIndex(0) : setRotationIndex(rotationIndex => rotationIndex + 1)
            setDeleting(false)
            setDelta(idleTime)
            setIsIdle(true)
            return
        }

        if (!deleting){
            setDelta(minimumTimeBetweenChars + (Math.random() * randomnessTimeBetweenChars))
        } else {
            setDelta(minimumTimeBetweenChars/2 + (Math.random() * randomnessTimeBetweenChars/1.5))
        }
    }

    function cursorUpdate(){
        if (isIdle){
            setCursorState((prevState) => (prevState === "|" ? "" : "|"))
        }
    }

    React.useEffect(()=> {
        let thisTicker = setInterval(()=>{
            tick()
            if (isIdle){
                setIsIdle(false)
            }
        }, delta)

        return (() => {
            clearInterval(thisTicker)
        })
    }, [currentText])


    React.useEffect(()=> {
        let intervalForCursor = setInterval(()=>{
            cursorUpdate()
        }, 450)

        return (() => {
            clearInterval(intervalForCursor)
        })

    }, [isIdle])


    return (
        <span class={websiteTheme == "Dark"? "banner-text-box-dark" : "banner-text-box-light"}>
            <span> {pretext + " " + currentText} </span>
            <span class={isIdle?  "cursor-blinking" : ""}>|</span>
        </span>
    )

 }