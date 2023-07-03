import Start from './views/Start';
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Notifications from './views/Notifications';
import Profile from './views/Profile';
import Messages from './views/Messages';


function App() {

  const loggedUser = useSelector((state:any) => state.loggedUserReducer.loggedUser)
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Start loggedUser={loggedUser}/>}></Route>
        <Route path="/home" element={<Home  loggedUser={loggedUser}/>}></Route>
        <Route path="/notifications" element={<Notifications  loggedUser={loggedUser}/>}></Route>
        <Route path="/profile" element={<Profile  loggedUser={loggedUser}/>}></Route>
        <Route path="/messages" element={<Messages  loggedUser={loggedUser}/>}></Route>
      </Routes>
    </>
  );

}

export default App;
