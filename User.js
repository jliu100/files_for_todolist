import React from "react";
// import { useParams } from "react-router";

function User(){
	// const {firstname,lastname} = useParams();   // can get data from the route link : ex : /user/john/johnson   we will get john
	// return (<div>User {firstname} {lastname}</div>)
	return <div> Welcome User</div>
}

export default User;




// import React, {useEffect, useState} from 'react';
// import {BrowserRouter as Route, Link} from 'react-router-dom';
// import { useParams } from "react-router";
// import axios from "axios";

// const About =() => {

//   const [users,setUsers] =useState([]);
//   const [token,setToken] =useState('');
//   const {name} =useParams();
  
//   useEffect(() => {
//     axios.post('/api/auth', {}, {
// 	  	data:{
// 			username:name
// 		},
// 		headers: {'content-type': 'application/json'}

// 	}).then(function(response) {
// 		console.log('Authenticated');
// 	    setToken(response.data.token);

// 	    axios.get('/api/todo-item', { headers: { 'Authorization': token }}).then(response => {
// 	    setUsers(response.data);
	    
// 	    }).catch((error) => {
// 	        console.log('Error');
// 		});

//     }).catch(function(error) {
// 		  console.log('Error on Authentication');

// 	});

//   },[]);
  
//   // users.map((user,index)=>{
//   //     console.log(user.content);
//   // });

//   function completedAndeleted(element){
//   	if(element.deleted===true)
//   		return;
//   	else if(element.completed===true)
//   		return <li key={element.id}><strike>{element.content}</strike></li>
//   	return <li key={element.id}>{element.content}</li>;
//   }
 


  
//    return (
//     <div>
//     	<h2>Hello: {name}</h2>
//       <h4>The following is your todolist</h4>
//        <ul>
//         {users.map(element=>(
//         	<Link to ={'/finEl/'+token+'/'+element.id+'/'+name}>{completedAndeleted(element) }</Link>
//         ))}
//       </ul>

//      <form >
//          <Link to ={"/addNewItem/"+name+"/"+token}> <button >Add New Item</button> </Link>
//       </form>
      
      

//     </div>
//   );
  
// };
// export default About;