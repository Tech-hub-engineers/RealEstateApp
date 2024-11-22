import '../assets/styles.css';
import {Link} from 'react-router-dom';

const Login_Welcome_Text = () => {
    return (
        <div className='text-base font-comic px-28 pt-16'>
            <h1 className='text-blue-900 font-bold text-3xl tracking-wide mb-3'>Create your Free Account</h1>
            <p className='text-gray-400 text-sm mb-4'>Submit your data for register</p>

            <form action="" method="post" className='flex flex-col'>

            <label htmlFor="text" className='text-xs mb-1'>Full Name</label>
                <input className='mb-2 border-blue-700 w-[90%] mb-4 outline-none border-2 py-1 px-2 rounded-md' type="text" name="fname" id="fname"  />

                <label htmlFor="text" className='text-xs mb-1'>Your Origin</label>
                <input className='mb-2 border-blue-700 w-[90%] mb-4 outline-none border-2 py-1 px-2 rounded-md' type="text" name="origin" id="origin" />


                <label htmlFor="email" className='text-xs mb-1'>Your Email</label>
                <input className='mb-2 border-blue-700 w-[90%] mb-4 outline-none border-2 py-1 px-2 rounded-md' type="text" name="email" id="email"/>

                <label htmlFor="password" className='text-xs mb-1'>Password</label>
                <input className='mb-1 border-blue-700 w-[90%] outline-none border-2 py-1 px-2 rounded-md' type="password" name="password" id="password"/>

                <div className='justify-between align-middle flex my-2 pr-11 text-sm'>
                    <div>
                        <input type="checkbox" className='mr-1' name="Remember_me" />
                        <label htmlFor="remember_me">I agree to Sewo <a href="#" className='text-blue-900'>Security</a> and <a href="#" className='text-blue-900'>Privacy Policy</a></label>
                    </div>
                </div>



                <button type="submit" className='mt-5 w-[90%] rounded-lg p-2 bg-blue-700 text-white'>Get Started</button>
            </form>


            <div className='flex justify-self-center text-sm tracking-wide align-middle mt-10'>
                <p className='text-gray-500'>I have an account?</p>
                <Link to={'/'} className='text-sky-400 ml-1'>Login</Link>
            </div>

            
        </div>
    )
}

export default Login_Welcome_Text