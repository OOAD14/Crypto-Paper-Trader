import { useState } from 'react';
import Modal from '../../components/modals/Modal';
import Signup from "../../components/signup/Signup";
import Login from "../../components/login/Login";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import './home.css';

const Home = () => {
    const [signup_modal, setSignup_modal] = useState(false);
    const [showLoginText, setShowLoginText] = useState(true);

    const toggleModal = () => {
        setSignup_modal(!signup_modal);
        setShowLoginText(!showLoginText);
    };

    return (
        <div style={{ backgroundColor: "#121212", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "white" }}>
            <div style={{ marginTop:"60px" }}>
                {showLoginText ? (
                    
                        <Button onClick={toggleModal} className="toggle-link">New user? Sign Up here</Button>
                    
                ) : (
                    
                        <Button onClick={toggleModal} className="toggle-link">Registered already? Login here</Button>
                    
                )}
            </div>
            <div className='hello' style={{ marginTop: "20px" }}>
                {signup_modal ? <Modal modal_body={<Signup login_modal={setSignup_modal} />}style={{ alignItems: "center", justifyContent: "center" }}/> :
                    <Modal modal_body={<Login />} style={{ alignItems: "center", justifyContent: "center" }}/>}
            </div>
        </div>
    
    );
}

export default Home;
