import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Signup() {

  const [data, setData] = useState([]);

  const [user, setUser] = useState({
    Firstname: '', Lastname: '', Email: '', Country: '', State: '', City: '', Gender: '', Dateofbirth: '', Age: ''
  })

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCountryStates, setSelectedCountryStates] = useState([]);
  const [selectedStateCities, setSelectedStateCities] = useState([]);

  const handleCountryChange = (e) => {
    const selectedCountryName = e.target.value;
    const selectedCountryData = data.find(item => country(item) === selectedCountryName);
    setSelectedCountry(selectedCountryName);
    setSelectedCountryStates(selectedCountryData ? selectedCountryData.states : []);
    setSelectedState('');
    setSelectedStateCities([]);
  };

  const handleStateChange = (e) => {
    const selectedStateName = e.target.value;
    setSelectedState(selectedStateName);
    const selectedStateData = selectedCountryStates.find(state => state.name === selectedStateName);
    setSelectedStateCities(selectedStateData ? selectedStateData.cities : []);
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setUser(prevUser => ({ ...prevUser, City: selectedCity }));
  };



  const handleinp = (e) => {
    let { name, value } = e.target
    setUser({ ...user, [name]: value })
    console.log(user, 'ifhwaiofhwoahfow');
    if (name === 'Dateofbirth') {

      calculateAge(value);
    }
  }
  const postdata = async (e) => {

    e.preventDefault()
    console.log(user);
    await axios.post('http://localhost:9999/signup', { user, selectedCountry, selectedState })

  }



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9999/getdata');
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const country = (item) => {
    return item.name;
  };
  const state = (states) => {
    return states.map((state, index) => (
      <option key={index}>{state.name}</option>
    ));
  };

  const city = (states) => {
    return states.flatMap((state) => state.cities.map((city, index) => (
      <option key={index}>{city}</option>
    )));
  };

  const calculateAge = (dob) => {

    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    setUser({ ...user, Age: age, Dateofbirth: dob });
  };

  return (
    <>
      <input type="text" name='Firstname' value={user.Firstname} onChange={handleinp} />
      <input type="text" name='Lastname' value={user.Lastname} onChange={handleinp} />
      <input type="text" name='Email' value={user.Email} onChange={handleinp} />
      <select type="text" name='Country' value={selectedCountry} onChange={handleCountryChange}>
        {data.map((item, index) => (
          <option key={index}>{country(item)}</option>
        ))}
      </select>

      <select type="text" name='State' value={selectedState} onChange={handleStateChange}>
        {selectedCountryStates.map((state, index) => (
          <option key={index}>{state.name}</option>
        ))}
      </select>

      <select type="text" name='City' value={user.City} onChange={handleCityChange}>
        {selectedStateCities.map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </select>

      <input type="radio" name='Gender' value="Male" onChange={handleinp} />
      <input type="radio" name='Gender' value="Female" onChange={handleinp} />
      <input type="date" name='Dateofbirth' value={user.Dateofbirth} onChange={handleinp} id='Dateofbirth' />
      <input type="text" name='Age' value={user.Age} onChange={handleinp} />
      <button type="submit" onClick={postdata}>click</button>




    </>
  )
}

export default Signup