import React from "react"
import "./styles/ShowcaseDisplay.css"
import JaneLogo from '../images/companylogos/JaneLogo.png';
import WealthsimpleLogo from '../images/companylogos/WealthSimpleLogo.png';
import EcobeeLogo from '../images/companylogos/EcobeeLogo.png';
import TelusLogo from '../images/companylogos/TelusLogo.png';
import { useWindowDimensions } from "../hooks/WindowDimensions";


export const ShowcaseDisplay = () => {
    const boxNumber = 4;
    const imgArray = [JaneLogo, WealthsimpleLogo, EcobeeLogo, TelusLogo]
    const {height, width} = useWindowDimensions();

    const [pointerPos, setPointerPos] = React.useState(1)


    React.useEffect(()=>{
        let interval = setInterval(updatePointerPos, 2000)
        return ( () => { clearInterval(interval) })
    })

    const updatePointerPos = ()=>{
        if (pointerPos == 4){
            setPointerPos(1)
        }else{
            setPointerPos((prevPos) => prevPos+1)
        }
    }


    return (
        <div>
            <div class="display-container">
                {imgArray.map((val, index) => (<img key={index} class="image-box" src={val}/>)) }
            </div>
        </div>
    )
}