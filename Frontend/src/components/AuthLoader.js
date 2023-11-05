import React from 'react'
import {CircularProgress} from "@nextui-org/react";
import './loader.css'
const Loader = () => {
    return (
        <div className='henlo' style={{ width: "100%", height: "100%" }}>
            <CircularProgress color="default" aria-label="Loading..."/>
        </div>
    )
}

export default Loader