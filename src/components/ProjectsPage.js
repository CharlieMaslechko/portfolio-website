import React from "react"
import { Project } from "./Project"
import "./styles/ProjectsPageStyle.css"

export const ProjectsPage = () => {

    
    const Projects = [<Project name="Crypto Mining Rig" description="I built a fully functional Ethereum mining rig running Hive OS"/>, <Project name="Workbench" description="From CAD design to construction I remodelled and implmented a floating workbench in our garage"/>, <Project name="Reco" description="Restaurant review app designed to improve authenticity of restaurant reviews"/>, <Project name="Portfolio Website" description="This website you are viewing right now filled with custom components and styling"/>]
    return (
        <div class="page-style">
            {Projects}
        </div>
    )
}