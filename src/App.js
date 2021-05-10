import './App.css';
import React, { useEffect, useState } from 'react'
function App() {
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [mobile,setMobile]=useState("");
function saveData()
{
  let data={name,email,mobile}
// console.warn(data);
  fetch("http://localhost:3000/todo", {
    method: "POST",
    headers: {
      //Accept means accepting Json Data
      //Content Type : Result that we got(i.e JSon)
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    //Stores actual result name,email,mobile
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
  return (
    <div className="App">
      <h1>POST API Example </h1>  
      <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
      <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="text" name="mobile"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>
    </div>
  );
}
export default App;


//////////////// GET API CALL /////////////////

//Uncomment this for GET API CALL

// import './App.css';
// import React,{useEffect,useState} from 'react'
// function App() {
//   const [users,setUser]=useState([])
//   useEffect(()=>{
//     fetch("http://localhost:4000/todo").then((result)=>{
//       result.json().then((resp)=>{
//         // console.warn(resp)
//         setUser(resp)
//       })
//     })
//   },[])
//   console.warn(users)
//   return (
//     <div className="App">
//       <h1>Get API Call </h1>
//       <table border="1">
//        <tbody>
//        <tr>
//           <td>ID</td>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Mobile</td>
//         </tr>
//         {
//           users.map((item,i)=>
//             <tr key={i}>
//             <td>{item.userId}</td>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//             <td>{item.mobile}</td>
//           </tr>
//           )
//         }
//        </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;
