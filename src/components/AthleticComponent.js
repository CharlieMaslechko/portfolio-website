import React from "react"

export const AthleticComponent = (props) => {
    return (
        <div class="athletic-component-holder" style={{'--button-background': props.color}}>
            Distance {props.sport}
        </div>
    )
}