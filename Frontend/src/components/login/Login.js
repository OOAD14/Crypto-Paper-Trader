import React, { useRef, useState } from 'react'
import {Input} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import { basicAxios } from '../../api/customAxios'

const Login = () => {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")

    const signin = async (e) => {
        e.preventDefault()
        const password = passwordRef.current.value
        const username = usernameRef.current.value

        try {
            if (username === "" || password === "")
                throw new Error("Fields can't be empty!")
            const res = await basicAxios.post("/accounts/login/", {
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            })
            localStorage.setItem('jwt_token', res.data.jwt_token)
            window.location.reload()
        }
        catch (err) {
            setError(err?.message || "Signup failed")
        }
    }
    return (
        <div>
            {error !== "" && <div className="alert alert-warning" role="alert">
                {error}
            </div>}
            <form onSubmit={signin} noValidate>
                <div className="form-floating mb-3">
                    <Input ref={usernameRef} type="text" className="form-control dark text-foreground flex w-full flex-wrap md:flex-nowrap gap-4" id="loginUsername" placeholder="Username" />
                    {/* <label forhtml="loginUsername">Username</label> */}
                </div>
                <div className="form-floating">
                    <Input ref={passwordRef} type="password" className="form-control dark text-foreground flex w-full flex-wrap md:flex-nowrap gap-4" id="signupPassword" placeholder="Password" />
                    {/* <label forhtml="signupPassword">Password</label> */}
                </div>
                <div className="mt-3 d-flex justify-content-center">
                    <Button className='btn btn-primary' color="success" variant="flat" onClick={signin}>Login</Button>
                </div>
            </form>
        </div>
    )
}

export default Login