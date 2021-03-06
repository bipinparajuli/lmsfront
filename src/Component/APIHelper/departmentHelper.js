//get all deprtment list
export const getAllDepartment = (userId,token) => {
// console.log("ALLDEPARTMENT",userId,token)
    return fetch (`https://mysterious-woodland-24801.herokuapp.com/api/department/alldepartment/${userId}`,{
method:"GET",

headers:{
    "Content-Type":"application/json",
   "Authorization":`Bearer ${token}`
},
})
.then(response=>{
  return response.json()
})
.catch(er=>{
    return er
})
}

//get single department
export const getDepartment = (userId,token,departmentId) => {
        return fetch (`https://mysterious-woodland-24801.herokuapp.com/api/department/department/${userId}/${departmentId}`,{
    method:"GET",
    
    headers:{
        "Content-Type":"application/json",
       "Authorization":`Bearer ${token}`
    },
    })
    .then(response=>{
      return response.json()
    })
    .catch(er=>{
        console.log(er)
    })
    }

//create new department
export const createDepartment = (userId,token,data) => {
    console.log(userId,token,data)
    return fetch(`https://mysterious-woodland-24801.herokuapp.com/api/department/adddepartment/${userId}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
        ,body:JSON.stringify(data)
    }).then(response=> {

return  response.json()
    }).catch(err=>{
        console.log(err)
    })
}

//update department
export const updateDepartment = (userId,token,departmentId,data) => {
    console.log(userId,token,departmentId,data)
    return fetch(`https://mysterious-woodland-24801.herokuapp.com/api/department/updatedepartment/${userId}/${departmentId}`,
        {
            method:"PUT",
            headers:{
         "Content-Type":"application/json",
         "Authorization":`Bearer ${token}`     
            },
            body:JSON.stringify(data)
          })
}

//delete department
export const deleteDepartment = (userId,token,departmentId) => {
    
    return fetch(`https://mysterious-woodland-24801.herokuapp.com/api/department/deletedepartment/${userId}/${departmentId}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then(response=> {
        response.json()
    }).catch(err=>{
        console.log(err)
    })
}
