import React, { useEffect, useState } from 'react';
import Start from './Containers/Start';
import Home from './Containers/Home';


class App extends React.Component {
  state = {
    start: true,
    home: false,

    loggedUser: {
      Id: null,
      DisplayName: null,
      Token: null,
      Image: null,
      Username: null,
    }
  }

  changeContainer = (containerName: string) => {
    for (let item in this.state) {
      if (item === containerName) {
        this.setState({
          [item]: true
        })
      } else {
        this.setState({
          [item]: false
        })
      }
    }
  }

  setLoggedUser = (id:string, displayname:string, 
    token:string, image:string, username: string) => {
      this.setState({
        loggedUser: {
          Id: id,
          DisplayName: displayname,
          Token: token,
          Image: image,
          Username: username,
        }
      })
  }

  render() {
    return (
      <>
        {this.state.start ? <Start changeContainer={this.changeContainer} setLoggedUser={this.setLoggedUser}/> : null}
        {this.state.home ? <Home changeContainer={this.changeContainer} loggedUser={this.state.loggedUser}/> : null}
      </>
    );
  }
}

export default App;
