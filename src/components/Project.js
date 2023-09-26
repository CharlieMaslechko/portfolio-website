import React from "react"
import "./styles/ProjectStyle.css"

export const Project = (props) => {

    return (
        <div class={props.show ? "project-container-show" : "project-container-hide"}> 
            <h1>{props.name}</h1>
            <p> {props.description} </p>
        </div>
    )
}