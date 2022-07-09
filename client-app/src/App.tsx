import React, { useState } from 'react';
import Start from './Containers/Start';
import Home from './Containers/Home';


function App() {
  const [container, setContainer] = useState({start: true, home:false});

  const changeContainer = (name:string) => {
    for(let key in container)
    {
      console.log(key)
    }
  }

  return (
    <>
      {container.start ? <Start changeContainer={changeContainer}/> : null}
      {container.home ? <Home changeContainer={changeContainer}/> : null}
    </>
  );
}

export default App;
