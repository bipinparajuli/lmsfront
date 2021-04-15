import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../UI/Navbar/Navbar'

const Layout = ({children}) => {
const data =['/dashboard',"/allbook","/alluser","/issuebook","/addbook","/adduser","/department","/"]
    return (
        <div className="container-fluid">
<Navbar name="Admin" />
            <div className="row">
<div className="col-2">
       <Sidebar 
data={data}
one="Dashboard" two="All Books" three="All users" four="Issue/Return Request" five="Add Book" six="Add user" seven="Department" eight="Logout" />
       </div>
       <div className="col-10">
            {children}
        </div>
            </div>
        </div>
    )
}

export default Layout
