import React, { useEffect, useState } from 'react';
import Start from './Containers/Start';
import Home from './Containers/Home';


class App extends React.Component {
  state = {
    start: true,
    home: false,
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

  render() {
    return (
      <>
        {this.state.start ? <Start changeContainer={this.changeContainer} /> : null}
        {this.state.home ? <Home changeContainer={this.changeContainer} /> : null}
      </>
    );
  }
}

export default App;
