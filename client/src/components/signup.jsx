import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Signup() {

  const [data, setData] = useState([]);

  const [user, setUser] = useState({
    Firstname: '', Lastname: '', Email: '', Gender: '', Dateofbirth: '', Age: ''
  })




  const handleinp = (e) => {
    let { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const postdata = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9999/signup', user);
      fetchData(); 
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
  

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:9999/getdata');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [data]);
  

  return (
    <>
      <input type="text" name='Firstname' value={user.Firstname} onChange={handleinp} />
      <input type="text" name='Lastname' value={user.Lastname} onChange={handleinp} />
      <input type="text" name='Email' value={user.Email} onChange={handleinp} />
     
      <input type="radio" name='Gender' value="Male" onChange={handleinp} />
      <input type="radio" name='Gender' value="Female" onChange={handleinp} />
      <input type="date" name='Dateofbirth' value={user.Dateofbirth} onChange={handleinp} id='Dateofbirth' />
      <input type="text" name='Age' value={user.Age} onChange={handleinp} />
      <button type="submit" onClick={postdata}>click</button>

      

{data.map((item,index)=>(
  <div key={index}>{item.Firstname}</div>
))}


    </>
  )
}

export default Signup