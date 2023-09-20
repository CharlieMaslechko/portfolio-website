import React from "react"
import "./styles/AthleticsPageStyle.css"

export const AthleticsPage = () => {

    const [bikeDistance, setBikeDistance] = React.useState(0)
    const [runDistance, setRunDistance] = React.useState(0)
    const [swimDistance, setSwimDistance] = React.useState(0)
    const [activities, setActivities] = React.useState()

    const finalSwim = 10;
    const finalBike = 257;
    const finalRun = 124;

    const auth_link = "https://www.strava.com/oauth/token"

    const reAuthorize = () => {
        fetch(auth_link,{
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client_id: '113879',
                client_secret: '70c974d6883338d013aac45a461a0a4981d87f3f',
                refresh_token: '69c54aa3e8b05abfa033e4f0946d3b8363c9fdb4',
                grant_type: 'refresh_token',
                scope: 'activity:read',
            })
        }).then(res => res.json()).then((data)=>loadActivities(data.access_token))
    }

    const loadActivities = (token) => {
        const activities_link = `https://www.strava.com/api/v3/activities?access_token=${token}`
        fetch(activities_link).then(res => res.json()).then((data)=>console.log(data))
    }

    const displayDistancesManager = () => {
        if (bikeDistance < finalBike){
            setBikeDistance((prev) => prev+1)
        } else if (runDistance < finalRun){
            setRunDistance((prev) => prev+1)
        } else if (swimDistance < finalSwim) {
            setSwimDistance((prev) => prev+1)
        }
    }

    React.useEffect(()=>{
        console.log(activities)
    }, [activities])


    React.useEffect(()=>{
        reAuthorize()
    }, [])

    React.useEffect(()=>{
        let interval = setInterval(displayDistancesManager, 20)
        return ( () => { clearInterval(interval) })
    })


    return (

        <div>
            <div class="display">
                <div> 
                    <h1>Distance Biked</h1>
                    <h2>{bikeDistance}</h2>
                </div>
                <div> 
                    <h1>Distance Run</h1>
                    <h2>{runDistance}</h2>
                </div>
                <div> 
                    <h1>Distance Swam</h1>
                    <h2>{swimDistance}</h2>
                </div>
            </div>
        </div>
    )
}