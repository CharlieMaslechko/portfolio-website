import React from "react"
import "./styles/ProjectStyle.css"

export const Project = (props) => {

    return (
        <div class="project-container"> 
            <h1>
            {props.name}
            </h1>
            <p> {props.description} </p>
        </div>
    )
}