import React,{lazy,useState} from 'react'
// import { searchBookByName } from '../../APIHelper/bookapi'
// import { getAllBook } from '../../APIHelper/bookapi'
import Layout from '../../Layout/Layout'
import {useStateValue} from '../../../Container/Serviceprovider'

const Table = lazy(() => import('../../UI/Table/Table'))




const AllBook = () => {

    const [value, setvalue] = useState("")

    const [{},dispatch] = useStateValue();
    
// const bookNotAvailable = () => {
//     return(
//         <div>
// <h3>No Book is present in Database</h3>
//             </div>
//     )
// }

const submit = (e)=> {
    // console.log(value)
    e.preventDefault();
    dispatch({
        type:'SEARCH',
        item:{
           value:value
        }
    })
}



const bookAvailable  = () => {
return (
<Layout>
    <div >
    <nav className="navbar navbar-light">
  <div className="container-fluid">
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search book" onChange={e=>setvalue(e.target.value)} aria-label="Search" />
      <button className="btn btn-outline-success" onClick={submit} type="submit">Search</button>
    </form>
    </div>
    
    </nav>
    <div className="table-responsive">
    <table className="table table-bordered" style={{marginTop:"20px"}}>
<thead>
            <tr>
                <th>Book ID</th>
                <th>Book Name</th>
                <th>Stocks</th>
                <th>Created at</th>
                <th></th>
          
                </tr>
            </thead>


<Table   />
</table>
</div>

</div>
</Layout>
)
}

    return (
        <div>

{bookAvailable()}

        </div>
    )
}

export default AllBook
