import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <RestCountries></RestCountries>
     {/* <ExternalUsers></ExternalUsers> */}
    </div>
  );
}

function RestCountries(){
  const [countrys,setCountrys]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountrys(data))
    
  },[])

  countrys.map(country=><li>{country.length}</li>)
  return(
    <div>
      {
        countrys.map(country=><Country name={country.name} flag={country.flags} population={country.population
        }></Country>)
      }
    </div>
  )
}
function Country(props){
  
  return(
    <div className='country'>
      
      <h1>{props.name.common}</h1>
      <h2>Population :{props.population
}</h2>
     
      <img src={props.flag.png} alt="" />
    </div>
  )
}
// function ExternalUsers(){
//   const [user,setUsers]=useState([])
//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res=>res.json())
//     .then(data=>setUsers(data))
//   },[])
//   user.map(user1=><li>{user1}</li>)
//   return(
//     <div>
//       <h1>User External</h1>
//       <h1>{user.length}</h1>
//       {
//         user.map(users=><Users name={users.name} email={users.email}></Users>)
//       }
//     </div>
//   )
// }
// function Users(props){
//   return(
//     <div className='conatiner'>
//       <p> <strong>User Name:</strong> {props.name}</p>
//       <p>User Email : {props.email}</p>
//     </div>
//   )
// }


export default App;
