import React,{useState,useEffect} from 'react'
import StudentHome from '../StudentHome'
import img from '../../Assets/Image/femlae.png'
// import { Card } from '../../UI/Card/Card'
import "./Profile.css"
import { isAuthenticate } from '../../auth'
import { getStudentById } from '../../APIHelper/Studentapi'
import { useStateValue } from '../../../Container/Serviceprovider'

const {user,} = isAuthenticate();


const Profile = () => {
 const [{},dispatch] = useStateValue();

    const [state, setstate] = useState("Loading ...")


const preload = (id) => {

    // console.log(id)

    getStudentById(id)
    .then(data=>
        {
            data.enc_password =  ""
            // console.log(data)

            dispatch({
    type:"STUDENT",
    item:data
})
            setstate(data)

        })
    .catch(e=> console.log(e))
    }

useEffect(()=>{
preload(user._id)
},[])

    return (
      <>
      <StudentHome>
      <div className="row">
      <div className="col-3">
           <div className="text-center" style={{borderRadius:"50%"}}>
  <img src={img} className="rounded" alt="logoes" style={{height:"200px",width:"200px"}} />
</div> 
</div>

<div className="col-9">
    <span className="lead">Full Name : </span>
    {/* <input  type="text" value={state.name} /><br/> */}
<p>{state.name}</p>

    <span className="lead">Email :</span>
    {/* <input type="text" value={state.email} /><br/> */}
    <p>{state.email}</p>

    <span className="lead">Address :</span>
    {/* <input type="text" value={state.address} /><br/> */}
    <p>{state.address}</p>
    
    <span className="lead">Department :</span>
    {/* <input type="text" value={state.department} /><br/> */}
    <p>{state.department}</p>
    
    <span className="lead">Roll no :</span>
    {/* <input type="text" value={state.roll_no} /><br/> */}
    <p>{state.roll_no}</p>

    <span className="lead">Contact no. :</span>
    {/* <input type="text" value={state.phone} /><br/> */}
    <p>{state.phone}</p>

</div>


</div>
        </StudentHome>

    </>
    )
}

export default Profile
