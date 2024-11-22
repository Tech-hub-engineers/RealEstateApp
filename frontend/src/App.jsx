import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import Register from './pages/RegisterPage.jsx';

const App = () => {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/register" element={<Register />} /> 
      </Routes>
    </Router>
  );
}

export default App;
