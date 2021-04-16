import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./dashboard.css"
function Dashboard() {
    const [files , setfiles] = useState([]);
    var rep;

    const getfiles = async()=>{
        return fetch("http://localhost:8000/allfiles" , {
            method : "GET"
        }).then(response=>{return response.json()});
    }

    useEffect(() => {
        const rep = getfiles().then(data=>{
            console.log(data.allfiles);
            setfiles(data.allfiles);
        }) 
    }, [])
    return (
        <div className="dahboard__main__container">
            {files.map((e)=>(
                    <div className="dashboard__filename">{e}</div>
    ))}
        </div>
    )
}

export default Dashboard
