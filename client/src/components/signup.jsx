import React, { useState } from 'react'
import axios from 'axios'
function signup() {

const [user,setUser]=useState({
    firstname:'',email:'',passcord:''
})

const handleinp = (e)=>{
    let name = e.target.name
    let value = e.target.value
setUser({...user,[name]:value})
}
const postdata = async(e)=>{
    e.preventDefault()
    console.log(user);
await axios.post('http://localhost:9999/signup',user)
.then(res=>console.log(res))
.catch(err=>console.log(err))
}


axios.get('http://localhost:9999/user')
.then(res=>console.log(res))
.catch(err=>console.log(err))
  return (
    <>
<input type="text" name='firstname' value={user.firstname} onChange={handleinp}/>
<input type="text" name='email' value={user.email} onChange={handleinp} />
<input type="text" name='passcord' value={user.passcord} onChange={handleinp} />
    <button type="submit" onClick={postdata}>click</button>
    
    






    
    </>
  )
}

export default signup