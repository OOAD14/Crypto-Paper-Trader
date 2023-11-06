import React, { useRef, useState } from 'react'
import {Input} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import { basicAxios } from '../../api/customAxios'
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";


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
            
            <Card className="gradient-border" style={{ backgroundColor: "#1d1d1d", borderRadius: "40px" }}>
            {error !== "" && <div className="alert alert-warning" role="alert" text-color="#cf6679" style={{ color:"#cf6679", justifyContent:"center", textAlign: "center" }}>
                {error}
            </div>}
                <form onSubmit={signin} noValidate style={{ margin:"30px", borderRadius: "10px", width:"25vw" }}>
                    <div className="form-floating mb-3">
                        <Input ref={usernameRef} type="text" size="lg" variant="underlined" label="Username" isRequired className="form-control dark text-foreground flex w-full flex-wrap md:flex-nowrap gap-4" id="loginUsername"  />
                    </div>
                    <div className="form-floating">
                        <Input ref={passwordRef} type="password" size="lg" variant="underlined" label="Password" isRequired className="form-control dark text-foreground flex w-full flex-wrap md:flex-nowrap gap-4" id="signupPassword"  />
                    </div>
                    <div className="mt-3 d-flex justify-content-center" style={{ display: "flex", justifyContent: "center", marginTop:"40px" }}>
                        <Button className='btn btn-primary' style={{ width:"8vw", color:"white" }} color="#000000" variant="bordered" onClick={signin}>Login</Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default Login