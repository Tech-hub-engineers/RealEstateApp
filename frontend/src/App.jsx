import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import Register from './pages/RegisterPage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx';
import Home from './pages/Home.jsx';
import Explore from './pages/SideMenuPages/Explore.jsx';
import My_Order from './pages/SideMenuPages/My_Order.jsx'
import Message from './pages/SideMenuPages/Message.jsx';
import House_Detail from './components/House_Detail.jsx';
import My_Profile from './pages/SideMenuPages/My_Profile.jsx';

const App = () => {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path='/forgotpwd' element={<ForgotPasswordPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/my_order' element={<My_Order/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/my_profile' element={<My_Profile/>}/>
        <Route path='/housedata/:id' element={<House_Detail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
