import React, { useRef, useState } from 'react'
import {Input} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import { basicAxios } from '../../api/customAxios'
import './signup.css'
const Signup = ({ login_modal }) => {
    
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const cpasswordRef = useRef()
    const [error, setError] = useState("")

    const register = async (e) => {
        e.preventDefault()
        const password = passwordRef.current.value
        const cpassword = cpasswordRef.current.value
        const username = usernameRef.current.value
        const email = emailRef.current.value

        try {
            if (username === "" || email === "" || password === "" || cpassword === "")
                throw new Error("Fields can not be left empty")
            if (password !== cpassword)
                throw new Error("Password and Confirm Password should be same")

            await basicAxios.post("/accounts/register/", {
                username,
                password,
                email
            })
            login_modal(false)
        }
        catch (err) {
            setError(err?.message || "Signup failed")
        }
    }
    return (
        <>
            {error !== "" && <div className="alert alert-warning" role="alert">
                {error}
            </div>}

            <form onSubmit={register} noValidate>
                <div className="form-floating mb-3">
                    <Input ref={emailRef} type="email" className="form-control dark text-foreground flex w-full flex-wrap md:flex-nowrap gap-4" id="signupEmail" placeholder="name@example.com" />
                    {/* <label forhtml="signupEmail">Email address</label> */}
                </div>
                <div className="form-floating mb-3">
                    <Input ref={usernameRef} type="text" className="form-control dark text-foreground flex w-full flex-wrap md:flex-nowrap gap-4" id="signupUsername" placeholder="Username" />
                    {/* <label forhtml="signupUsername">Username</label> */}
                </div>
                <div className="form-floating mb-3">
                    <Input ref={passwordRef} type="password" className="form-control dark text-foreground flex w-full flex-wrap md:flex-nowrap gap-4" id="signupPassword" placeholder="Password" />
                    {/* <label forhtml="signupPassword">Password</label> */}
                </div>
                <div className="form-floating">
                    <Input ref={cpasswordRef} type="password" className="form-control dark text-foreground flex w-full flex-wrap md:flex-nowrap gap-4" id="signupCPassword" placeholder="Confirm Password" />
                    {/* <label forhtml="signupCPassword">Confirm Password</label> */}
                </div>
                <div className="mt-3 d-flex justify-content-center">
                    <Button className='btn btn-primary' color="success" variant="flat" onClick={register}>Signup</Button>
                    {/* <p className='xx'>Already Have an Account? </p> <p className='xc'>Login</p> */}
                </div>
            </form>
        </>
    )
}

export default Signup