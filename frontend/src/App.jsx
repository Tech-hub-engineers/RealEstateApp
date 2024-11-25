import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import Register from './pages/RegisterPage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx';

const App = () => {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path='/forgotpwd' element={<ForgotPasswordPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
