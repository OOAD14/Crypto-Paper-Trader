import React, { useRef, useState } from 'react'
import {Input} from "@nextui-org/react";
import Modal from '../../components/modals/Modal'
import {Button, ButtonGroup} from "@nextui-org/react";
import { basicAxios } from '../../api/customAxios'
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";

import './signup.css'
const Signup = ({ login_modal }) => {
    
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const cpasswordRef = useRef()
    const [error, setError] = useState("")
    const [signup_modal, setSignup_modal] = useState(true)

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
            
            <Card className="gradient-border" style={{ backgroundColor: "#1d1d1d", borderRadius: "40px" }}>
            {error !== "" && <div className="alert alert-warning" role="alert" text-color="#cf6679" style={{ color:"#cf6679", justifyContent:"center", textAlign: "center" }}>
                {error}
            </div>}
                <form onSubmit={register} noValidate style={{ width:"30vw", margin:"30px", borderRadius: "10px" }}>
                    <div className="form-floating mb-3">
                        <Input size="lg" isRequired ref={emailRef} variant="underlined" type="email" className="form-control dark text-foreground flex w-full flex-wrap md:flex-nowrap gap-4" id="signupEmail" label="Email" />
                        {/* <label forhtml="signupEmail">Email address</label> */}
                    </div>
                    <div className="form-floating mb-3">
                        <Input size="lg" isRequired ref={usernameRef} variant="underlined" type="text" className="form-control dark text-foreground flex w-full flex-wrap md:flex-nowrap gap-4" id="signupUsername" label="Username" />
                        {/* <label forhtml="signupUsername">Username</label> */}
                    </div>
                    <div className="form-floating mb-3">
                        <Input size="lg" isRequired ref={passwordRef} variant="underlined" type="password" className="form-control dark text-foreground flex w-full flex-wrap md:flex-nowrap gap-4" id="signupPassword" label="Password" />
                        {/* <label forhtml="signupPassword">Password</label> */}
                    </div>
                    <div className="form-floating">
                        <Input size="lg" isRequired ref={cpasswordRef} variant="underlined" type="password" className="form-control dark text-foreground flex w-full flex-wrap md:flex-nowrap gap-4" id="signupCPassword" label="Confirm Password" />
                        {/* <label forhtml="signupCPassword">Confirm Password</label> */}
                    </div>
                    <div className="mt-3 d-flex justify-content-center" style={{ display: "flex", justifyContent: "center", marginTop:"40px" }}>
                        <Button className='btn btn-primary' style={{ width:"8vw", color:"white" }} color="#000000" variant="bordered" onClick={register}>Signup</Button>
                        {/* <p className='xx'>Already Have an Account? </p> <p className='xc'>Login</p> */}
                    </div>
                </form>
            </Card>
            
        </>
    )
}

export default Signup