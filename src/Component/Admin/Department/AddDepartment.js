import React,{useState,useEffect} from 'react'
import Layout from '../../Layout/Layout'
import {AddCircleOutline} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import { isAuthenticate } from '../../auth'
import { getAllDepartment } from '../../APIHelper/departmentHelper'


const {user,token} = isAuthenticate()

const AddDepartment = () => {
const [state, setstate] = useState(["Loading . . ."])

    const preload = () => {
getAllDepartment().then(data=>{
    setstate(data)
}).catch(err=>console.log(err))
    }

useEffect(()=>{
preload();

},[])
    return (
        <Layout>
           <span className='text-center lead'>Add Department </span>
           <Link style={{color:"#8D3DAF",}} to="department/addDepartment"><AddCircleOutline className="animate__animated animate__flash animate__infinite" style={{fontSize:"60px"}} /></Link>
        <div className="table-responsive">
            <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
      {
    state.map((data,i)=>(
<tr>
      <th scope="row">{i}</th>
      <td>{data.name}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    ))      
      }
    
  </tbody>
</table>
        </div>
        </Layout>
    )
}

export default AddDepartment
