import React, {useEffect} from "react";
import { useParams } from "react-router";
import {Redirect} from "react-router-dom";
import axios from "axios";

function NewAccount(){
	
	var {newName}=useParams();

	// const [redirect,setRedirect]= useState('/');

	useEffect(() => {
		
		axios.post('/api/user', {
		  username: newName
		}).then(function(response){
			console.log("Added");
			console.log(newName);
	
		}).catch((error) => {
		     console.log(error);
		       
		});
    

  	},[]);
	
	return (
		<Redirect to={"/"} />

		
	);

	
}

export default NewAccount;