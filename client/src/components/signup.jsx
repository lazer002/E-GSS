import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function Signup() {

  const [user, setUser] = useState({
    firstname: '', email: '', passcord: ''
  })


  const handleinp = (e) => {
    let name = e.target.name
    let value = e.target.value
    setUser({ ...user, [name]: value })
  }
  const postdata = async (e) => {
    e.preventDefault()
    console.log(user);
    await axios.post('http://localhost:9999/signup', user)

  }








  const [data, setData] = useState([]);
  const res = async (e) => {
    try {
      const response = await axios.get('http://localhost:9999/user')
      // console.log(response, 'ghhhhhhhhhhhh');
      setData(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    res()
  }, [])
  console.log(data, 'response.data.data');



  // const [data, setData] = useState([]);
  // useEffect(()=>{
  // try {
  //  axios.get('http://localhost:9999/user')
  //    .then(res=> setData(res.data.data))
  //    .catch(err=> console.log(err))
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },[])
  //   console.log(data,'response.data.data');


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  }
  
const [dup,setdup]=useState({
  un:'',ue:'',up:''
})

const updt = (e)=>{
 let name = e.target.name
 let value = e.target.value
  setdup({...dup,[name]:value})
}

const updatedata = async(e)=>{
  e.preventDefault()
  await axios.post('http://localhost:9999/update',dup)
}



 handleOpen = async(e)=>{

}







  return (
    <>
      {/* <input type="text" name='firstname' value={user.firstname} onChange={handleinp} />
      <input type="text" name='email' value={user.email} onChange={handleinp} />
      <input type="text" name='passcord' value={user.passcord} onChange={handleinp} />
      <button type="submit" onClick={postdata}>click</button> */}

<table border={1} >

        {data.map((item,i) => {
        return ( <tr key={i}><td style={{display:'none'}} className='user_id'>{item._id} </td> <td>{item.firstname} </td><td>{item.email} </td><td> {item.passcord} </td><td onClick={handleOpen}> edit</td>
        </tr>)
        })}

      </table>



    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <input type="text" name='un' value={dup.un} onChange={updt} />
      <input type="text" name='ue' value={dup.ue} onChange={updt} />
      <input type="text" name='up' value={dup.up} onChange={updt} />
      <button type="submit" onClick={updatedata}>Update</button>
        </Box>
      </Modal>
    </div>
  












    </>
  )
}

export default Signup