import Login_Navbar from '../components/Login_Navbar';
import Login_Welcome_Text from '../components/Login_Welcome_Text';
import Login_Slide_Images from '../components/Login_Slide_Images';
import '../assets/styles.css';

const loginpage = () => {
  return (
    <section
    style={{
        background: "linear-gradient(to right, #fafafa 50%, #ffffff 50%)",
      }}
    >
        
        <Login_Navbar text="Login"/>
        <div className='grid grid-cols-2'>
        <Login_Slide_Images/>
        <Login_Welcome_Text/>
        </div>
    
    </section>
  );
}

export default loginpage