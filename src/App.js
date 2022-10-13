import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Topbar from './component/Topbar/Topbar';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import User from './Pages/Home/User/User';
import Login from './Pages/Home/Login/Login';
import NewUser from './Pages/Home/NewUser/NewUser';
import UserList from './Pages/Home/UserList/UserList';


function App() {
  return (
    <Router>
      <Topbar />
        <div className='container'>
        <Sidebar />
        <Routes>
          <Route path ='/dashboard' element={<Home />} />
          <Route path ='/users' element={<UserList />} />
          <Route path = '/user/:userId' element = {<User />} />
          <Route path = '/newUser' element = {<NewUser />} />
          <Route path = '/' element = {<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
