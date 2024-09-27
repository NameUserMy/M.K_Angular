import { User } from "../Models/User";
import {Login} from '../Models/Login'
export class Request{



    async RegistrationUser(user:User){

        if(!user){
           return false;
        }
        const headers = {
            "Content-Type": "application/json; charset=utf-8",
            'Accept': 'application/json',
        
        }
     return await fetch("https://localhost:7218/api/Registrations", {
            method: 'POST',
            body: JSON.stringify(user,['Login','Pass','Name','LastName']),
            headers: headers,

        }).then(response => {

            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => {

                    const e = new error("Ex...");
                    e.data = error;

                });
            };
        });
    }

    async Loggin(login:Login){

        if(!login){
            return false;
         }
         const headers = {
             "Content-Type": "application/json; charset=utf-8",
             'Accept': 'application/json',
         
         }
      return await fetch("https://localhost:7218/api/Loggin", {
             method: 'POST',
             body: JSON.stringify(login,['Login','Pass']),
             headers: headers,
 
         }).then(response => {
 
             if (response.ok) {
                 return response.json();
             } else {
                 return response.json().then(error => {
 
                     const e = new error("Ex...");
                     e.data = error;
 
                 })
             }
         });


    }
    async GetUser(login:string){

     return await   fetch(`https://localhost:7218/api/Account/${login}`)
        .then((response)=>{


            if(response.ok){
                return response.json();
            }else {
                return response.json().then(error => {

                    const e = new error("Ex...");
                    e.data = error;

                });
            };
            
        });




    }

    async UpdateUser(user:User,login:string){

        if(!user){
            return false;
         }
         const headers = {
             "Content-Type": "application/json; charset=utf-8",
             'Accept': 'application/json',
         
         }
      return await fetch(`https://localhost:7218/api/Account?login=${login}`, {
             method: 'PUT',
             body: JSON.stringify(user,['Login','Pass','Name','LastName']),
             headers: headers,
 
         }).then(response => {
 
             if (response.ok) {
                 return response.json();
             } else {
                 return response.json().then(error => {
 
                     const e = new error("Ex...");
                     e.data = error;
 
                 });
             };
         });


    }

    

    
}