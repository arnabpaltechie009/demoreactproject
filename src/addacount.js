import React, { Component } from "react";
import ReactDOM from "react-dom";

import history from './history';
function validate(fname,lname ,email, city) {
   
   const errors = [];
  

 
   if (fname.length === 0) {
     
     errors.push("First Name can't be empty");
   }
   if (lname.length === 0) {
      
      errors.push("Last Name can't be empty");
    }
 
   if (email.length < 5) {
     
     errors.push("Email should be at least 5 charcters long");
   }
   if (email.split("").filter(x => x === "@").length !== 1) {
      
     errors.push("Email should contain a @");
   }
   if (email.indexOf(".") === -1) {
      
     errors.push("Email should contain at least one dot");
   }
 
   if (city.length === 0) {
      
      errors.push("City can't be empty");
    }   return errors;
  

   
 }
 
export default class AddAccount extends Component {

    constructor(props) {
        super(props);
        
        this.state = {

         fname: "",
         lname: "",

         email: "",
         city: "",
   
         errors: []
       };
     }

   
     handleSubmit = e => {
       e.preventDefault();
   
       const { fname, lname,email, city } = this.state;
   
       const errors = validate( fname, lname,email, city);
       if (errors.length > 0) {
         this.setState({ errors });
         return ;
       } 
        else{
           return alert("success");
        }
    

   
       
     };
   
  render() {
    
   const { errors } = this.state;
    return (
      <div >
        <center>
        <div>
          <h1>Add Account page</h1>
         <form onSubmit={this.handleSubmit}>
         {errors.map(error => (
          <p key={error}>Error: {error}</p>
        ))}
        
        <h3>First name: {this.state.fname} </h3><br></br>
        <h3>last name: {this.state.lname} </h3><br></br>
        <h3>Email: {this.state.email} </h3><br></br>
        <h3>city: {this.state.city} </h3><br></br>

        
           <label>First Name: </label>
         <input type="text" name="fname" placeholder=" Enter Your First Name" value={this.state.fname}
          onChange={evt => this.setState({ fname: evt.target.value })} /><br></br>
         
         <label>Last Name: </label>
         <input type="text" name="lname" placeholder=" Enter Your First Name" value={this.state.lname}
          onChange={evt => this.setState({ lname: evt.target.value })} /><br></br>
        
         <label>Email: </label>
        
         <input type="text" name="email" placeholder="Enter Your Email" value={this.state.email}
          onChange={evt => this.setState({ email: evt.target.value })} /><br></br>
         
         <label>City: </label>
         <input type="text" name="city" placeholder="Enter Your City" value={this.state.city}
          onChange={evt => this.setState({ city: evt.target.value })} />
         
         <br></br> <button type="submit">Submit</button>
          </form>
          
        </div>
        </center>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<AddAccount />, rootElement);