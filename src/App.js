import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Topbar from './component/Topbar/Topbar';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import UserList from './Pages/Home/UserList/UserList';
import User from './Pages/Home/User/User';
import Login from './Pages/Home/Login/Login';


function App() {
  return (
    <Router>
      <Topbar />
        <div className='container'>
        <Sidebar />
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/users' element={<UserList />} />
          <Route path = '/user/:userId' element = {<User />} />
          <Route path = '/login' element = {<Login />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App;
