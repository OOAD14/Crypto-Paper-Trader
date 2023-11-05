import { useState } from 'react'
import Modal from '../../components/modals/Modal'
import Signup from "../../components/signup/Signup"
import Login from "../../components/login/Login"
import {Button, ButtonGroup} from "@nextui-org/react";
import './home.css'

const Home = () => {
    const [signup_modal, setSignup_modal] = useState(true)

    return (
        <div>
            {/* {signup_modal ? <Modal modal_body={<Signup login_modal={setSignup_modal} />} modal_title={"Register"} /> :
                <Modal modal_body={<Login />} modal_title={"Login"} />} */}
            <div className='home-container'>
                <div className='box box-1'>
                    <div className="card c-card">
                        <div className="card-body">
                            <h5 className="card-title">Crypto Paper Trader</h5>
                            <p className="card-text">Welcome to Crypto Paper Trading Platform
                                Login or signup to continue.</p>
                            <div className='hello'>
                            {signup_modal ? <Modal modal_body={<Signup login_modal={setSignup_modal} />} modal_title={"Register"} /> :
                            <Modal modal_body={<Login />} modal_title={"Login"} />}
                            </div>
                            <div className='lol'>
                            <Button onClick={() => setSignup_modal(true)} className="btnc-btnme-3" data-bs-toggle="modal" data-bs-target="#exampleModal" color="secondary" variant="ghost">Signup</Button>
                            <Button onClick={() => setSignup_modal(false)} className="btnc-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" color="secondary" variant="ghost">Login</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home