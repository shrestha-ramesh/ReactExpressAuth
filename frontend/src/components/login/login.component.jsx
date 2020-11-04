import React, { useState } from "react"
import {TextField, FormControl, Typography, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import userLogin from '../../routes/userLogin.js'
import { Redirect } from "react-router-dom";

const useStyles= makeStyles({
    inputField:{
        marginBottom:10,
        width:300
    }
})
const Login = function(props){
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [message, setMessage]=useState('')
    const [redirect,setRedirect]=useState(false)

    const validateData=async()=>{
        if(!email || !password){
            return setMessage('Please fill the form completely.')
        }
        const result = await userLogin({email,password})
        if(result.status===400){
            return setMessage(result.message)
        }
        if(result.status === 404){
            return setMessage(result.message)
        }
        if(result.status === 401){
            return setMessage(result.message)
        }
        if(result.status === 202){
            console.log("Login suncessful")
            localStorage.setItem("Auth",result.token)
            setRedirect(true)
        }
    }

    const classes = useStyles();
    if(redirect){
        return <Redirect to="/"/>
    }
    return(
        <FormControl
        style={{border:"solid 1px black", padding:80, borderRadius:10}}
        >
            <Typography variant="h5" style={{marginBottom:10}}>LogIn</Typography>
            <TextField
            type="email"
            label="Email"
            variant="outlined"
            required                
            className={classes.inputField}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
            type="password"
            label="Password"
            variant="outlined"
            required
            className={classes.inputField}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <Typography style={{color:"red", marginBottom:30}}>{message}</Typography>
            <Button type="submit" variant="contained" color="secondary" onClick={validateData}>LogIn</Button>
            <Typography>
                or <Button variant="text" onClick={()=>props.handleFormChange("signup")}>SignUp</Button>
            </Typography>
        </FormControl>
    )
}
export default Login;