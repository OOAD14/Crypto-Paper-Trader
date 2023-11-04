import React from 'react'
import { basicAxios } from '../../api/customAxios'

const Logout = () => {
    const signout = async () => {
        localStorage.setItem("jwt_token", "")
        await basicAxios.get("/accounts/logout/")
        window.location.reload()
    }

    return (
        <button onClick={signout} className='btn btn-outline-danger signout'>Logout</button>
    )
}

export default Logout