import Login_Navbar from '../components/welcome_page/Login_Navbar';
import Register_Welcome_Text from '../components/welcome_page/Register_Welcome_Text';
import Login_Slide_Images from '../components/welcome_page/Login_Slide_Images';
import '../assets/styles.css';

const loginpage = () => {
  return (
    <section
    style={{
        background: "linear-gradient(to right, #fafafa 50%, #ffffff 50%)",
      }}
    >
        
        <Login_Navbar text="Register"/>
        <div className='grid grid-cols-2'>
        <Login_Slide_Images/>
        <Register_Welcome_Text/>
        </div>
    
    </section>
  );
}

export default loginpage