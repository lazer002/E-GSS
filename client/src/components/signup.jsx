import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Signup() {

const [user,setUser] = useState({
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

}
const [data, setData] = useState({});
useEffect(()=>{
try {
  const fetchdata = async ()=>{
    const  response=await axios.get('http://localhost:9999/user')
     setData(response.data.data)}
     fetchdata()
    } catch (error) {
      console.log(error);
    }
  },[])
  console.log(data,'response.data.data');



  // const [data, setData] = useState({});
  // useEffect(()=>{
  // try {
  //  axios.get('http://localhost:9999/user')
  //    .then(res=> setData(res.data))
  //    .catch(err=> console.log(err))
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },[])
  //   console.log(data,'response.data.data');






  return (
    <>
{/* <input type="text" name='firstname' value={user.firstname} onChange={handleinp}/>
<input type="text" name='email' value={user.email} onChange={handleinp} />
<input type="text" name='passcord' value={user.passcord} onChange={handleinp} />
    <button type="submit" onClick={postdata}>click</button> */}
    

    <div>
      {data.map((item) => {
      return(<li>Name: {item.firstname}</li>)

})}
    </div>





    
    </>
  )
}

export default Signup