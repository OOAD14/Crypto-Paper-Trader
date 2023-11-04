import React from 'react'
import {CircularProgress} from "@nextui-org/react";

const Loader = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: "100%", height: "100%" }}>
            <CircularProgress color="default" aria-label="Loading..."/>
        </div>
    )
}

export default Loader