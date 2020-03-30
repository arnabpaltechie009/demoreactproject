import React, { Component } from "react";
import history from './history';

export default class Home extends Component {
  render() {
    return (
      <div >
        <div >
         <center> <h1>Login</h1></center>
          <form>
            <center>
            <label>Username: </label>
            <input type="text" name="username"/><br></br>
            <label>Password: </label>
            <input type="password" name="pass"/><br></br>
            <button type="submit" onClick={() => history.push('/addacont')}>Login</button>
            </center> </form>
        </div>
      </div>
    );
  }
}
