import React,{useState} from 'react'
import './Signin.css'
import {Button,Card,TextField} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css';
import {FaUser} from 'react-icons/fa'
import {Login} from '../APIHelper/auth'
import {Redirect} from 'react-router-dom';
import { Authenticate, isAuthenticate } from '../auth';
// import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";


const Signin =  () => {
const [values,setvalue] = useState({
    email:"",
    enc_password:"",
    didredirect:false,
    loader:false,
    error:"",
    emailerror:"",
    passworderror:""
    // messege:""
})
// const [email, setemail] = useState("")

const {email,enc_password,didredirect,loader,error,emailerror,passworderror} = values;

const errorMessege = () => {
    return (
    <div className="row">
    <div className="col-md-6 offset-sm-3 text-left" style={{display: error ? "" : "none"}}>
    <div className="alert alert-danger" >
    {error}
    </div>
    </div>
    </div>
    )
    
    }
    

const {user} =isAuthenticate();


const Submit = async (e)=> {
e.preventDefault()

if(email == "")
{
return  setvalue({...values,emailerror:"Email is required"})  
}

if(enc_password == "")
{
return  setvalue({...values,passworderror:"Password is required"})  
}


     setvalue({...values,error:false,loader:true})

        Login({email,enc_password}).then((data)=>{
console.log(data);
    if(!data.success)
    {
        // console.log(data.error)
 setvalue({...values,error:data.messege,loading:false})
    }   
else{
    Authenticate(data,()=>{
        setvalue({...values,didredirect:true})
    
    })
}

    
})
.catch(e=>console.log(e),setvalue({...values,enc_password:"",error:true,loader:true}))
    }

const performRedirect = () =>{
    if(didredirect)
    {
       if(user && user.role === 1)
       {
   
           return <Redirect to="/dashboard" />
       }
       else if(user && user.role === 0){
        return <Redirect to="/student" />

       }
   }
}


    


const signinForm = () => {
    return (
        <>
<div className=".container-fluid signin">
<Card>
            <ClipLoader color={"#8D3DAF"} loading={loader}  size={150} /> 
            {errorMessege()}
<form>
<div className="login_main color-black">
<FaUser style={{height:"100px",width:"100px"}}  />

<p style={{color:"red"}}> {emailerror}</p>
<TextField required rounded   placeholder="Email" color="black" type="email" value={email} onChange={e=>setvalue({...values,email:e.value})} />

<p style={{color:"red"}}>{passworderror}</p>
<TextField required rounded type="password" placeholder="password" value={enc_password} onChange={e=>setvalue({...values,enc_password:e.value})} />

<Button  onClick={Submit}>Login</Button>
</div>
</form>
</Card>
        </div>
</>
    )
}




    return (
<>
    {signinForm()}
    {performRedirect()}
 </>
    )
}

export default Signin
