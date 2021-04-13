export const createOrder = (uid,token,data) => {
return fetch(`http://localhost:8000/api/order/create/${uid}`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
       "Authorization":`Bearer ${token}`
    },
    body:JSON.stringify(data)
})
}

export const getStudentBookList = (uid,token) => {
    return fetch(`http://localhost:8000/api/order/getmybooks/${uid}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
           "Authorization":`Bearer ${token}`
        },
    })
    .then(response =>{
        return response.json()
    })
    .catch(er => console.log(er))
    }
    export const getAllOrder = (uid,token) => {
        return fetch(`http://localhost:8000/api/order/getAllOrder/${uid}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
               "Authorization":`Bearer ${token}`
            },
        })
        .then(response =>{
            return response.json()
        })
        .catch(er => console.log(er))
        }