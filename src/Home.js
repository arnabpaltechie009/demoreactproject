import React, { Component } from "react";
import history from './history';

export default class Home extends Component {
  render() {
    return (
      <div >
        <div >
         <h1>Login</h1>
          <form>
            
            <label>Username: </label>
            <input type="text" name="username"/><br></br>
            <label>Password: </label>
            <input type="password" name="pass"/><br></br>
            <button type="submit" onClick={() => history.push('/addacont')}>Login</button>
             </form>
        </div>
      </div>
    );
  }
}
