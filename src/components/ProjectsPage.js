import React from "react"
import { Project } from "./Project"
import "./styles/ProjectsPageStyle.css"

export const ProjectsPage = () => {


    let ind = 0
    
    const [projects, setProjects] = React.useState([{name: "Crypto Mining Rig", description: "I built a fully functional Ethereum mining rig running Hive OS", show: false},
                    {name:"Workbench", description: "From CAD design to construction I remodelled and implmented a floating workbench in our garage", show: false},
                    {name:"Reco", description: "Restaurant review app designed to improve authenticity of restaurant reviews", show: false},
                    {name:"Portfolio Website", description: "This website you are viewing right now filled with custom components and styling", show: false},
                    {name:"CNC Machine build", description: "Ordered and built a cnc machine and leveraged fusion360 for designs", show: false},
                    {name:"Jane Interview Application", description: "Created a barebones patient booking software for Jane using Python, flask and bootstrap", show: false},
                ])
    let interval

    const updateDisplayedProjects = () => {
        const currentProjects = [...projects]
        currentProjects[ind].show = true
        setProjects(currentProjects)
        ind = ind + 1
        if (ind == projects.length){
            clearInterval(interval)
        }
    }

    React.useEffect(()=>{
        interval = setInterval(() => {
            updateDisplayedProjects()
        }, 500)
    }, [])
    return (
        <div class="page-style">
            <div class="projects-holder">
                {projects.map((project) => (<Project name={project.name} description={project.description} show={project.show}/>))}
            </div>
        </div>
    )
}