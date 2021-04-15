//get all deprtment list
export const getAllDepartment = (userId,token) => {
return fetch (`http://localhost:8000/api/department/alldepartment/${userId}`,{
method:"GET",
headers:{
    "Content-type":"application/json",
    "Authorization" :`Bearer${token}`
}
})
.then(response=>{
   return 
   response.json()
})
.catch(er=>{
    console.log(er)
})
}

//create new department
export const createDepartment = (userId,token,data) => {
    return fetch(`http://localhost:8000/api/department/adddepartment/${userId}`,{
        method:"POST",
        headers:{
            "content_type":"application/json",
            "Authorization":`Bearer${token}`
        }
        ,body:JSON.stringify(data)
    }).then(response=> {
        response.json()
    }).catch(err=>{
        console.log(err)
    })
}

//update department
export const updateDepartment = (userId,departmentId,token,data) => {
    return fetch(`http://localhost:8000/api/department/updatedepartment/${userId}/${departmentId}`,{
        method:"PUT",
        headers:{
            "content_type":"application/json",
            "Authorization":`Bearer${token}`
        }
        ,body:JSON.stringify(data)
    }).then(response=> {
        response.json()
    }).catch(err=>{
        console.log(err)
    })
}

//delete department
export const deleteDepartment = () => {
    
    return fetch(`http://localhost:8000/api/department/deletedepartment/${userId}/${departmentId}`,{
        method:"DELETE",
        headers:{
            "content_type":"application/json",
            "Authorization":`Bearer${token}`
        }
    }).then(response=> {
        response.json()
    }).catch(err=>{
        console.log(err)
    })
}
