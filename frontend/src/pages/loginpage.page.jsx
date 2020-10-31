import React,{useState} from 'react';
import {Container} from "@material-ui/core"
import Login from '../components/login/login.component'
import Register from '../components/register/register.component'

function LoginPage() {
    const [form,setForm]=useState("login")
    return (
        <Container style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center",height:"100vh"}}>
            {
                form==="login"?<Login handleFormChange={setForm}/>:
                                <Register handleFormChange={setForm}/>
            }
        </Container>
    );
}

export default LoginPage;