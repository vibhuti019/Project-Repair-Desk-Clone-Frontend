export const isAuthenticate = () =>{
    let loggedStatus = localStorage.getItem('loggedIn')==='true' ?true:false 
    console.log(loggedStatus)
    return loggedStatus
}

