import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './components/LoginForm/LoginForm';
import ProjectsList from './scenes/ProjectsList';
import HelloPage from './scenes/HelloPage';
import LoginPage from './scenes/LoginPage';
import RegisterPage from './scenes/RegisterPage';

import TLDesk from './scenes/TLDesk';
import { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Search from './components/Search/Search';
import SideBar from './components/SideBar/SideBar';
import AddBt from './components/TlDesk/Started/AddBt';


function App() {
  const [User, setUser] = useState("guest");

  if (User == "guest") {
    return (
      <BrowserRouter>
      <div className="App">
        {/* <div className="bg"></div>
        <div className="bg2"></div>
        <div className="bg3"></div> */}
        {/* <Routes>
          <Route path="">
            <Route index element={<HelloPage/>}/>
            <Route path="login" element={<LoginForm setUser={setUser}/>}/>
            <Route path="registration" element={<SignUpForm/>}/>
          </Route>
        </Routes> */}
        <AddBt/>
      </div>
      </BrowserRouter>
    )
  }

    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
          <Route path="">
            <Route path="" element={<ProjectsList />}/>
            <Route path="tl_desk" element={<TLDesk />}/>
          </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;
