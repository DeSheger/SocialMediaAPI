import Start from './views/Start';
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Notifications from './views/Notifications';


function App() {

  const loggedUser = useSelector((state:any) => state.loggedUserReducer.loggedUser)
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Start loggedUser={loggedUser}/>}></Route>
        <Route path="/home" element={<Home  loggedUser={loggedUser}/>}></Route>
        <Route path="/notifications" element={<Notifications  loggedUser={loggedUser}/>}></Route>
      </Routes>
    </>
  );

}

export default App;
