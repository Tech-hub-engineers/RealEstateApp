import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import '../../assets/styles.css';

const Forgot_Pswd = () => {
  return (
    <div className='font-comic shadow-lg z-50 m-32 p-8 border-r-2 rounded-md relative'>
      <Link to="/">
      <MdCancel className='absolute -top-2 -right-3 text-2xl cursor-pointer' />
      </Link>
      <h1 className='text-blue-950 tracking-wide text-2xl font-bold'>Forgot Password</h1>
      <p className='text-sm text-gray-500 my-3'>Enter your email account to reset your password</p>

      <form action="" method="post" className='flex flex-col gap-3 mt-8'>
        <label htmlFor="email" className='text-sm'>Your Email</label>
        <input type="email" name="email" id="email" className='outline-none border-blue-950 py-2 px-5 rounded-md border-2' />
        <button type="submit" className='p-2 rounded-md bg-blue-600 text-white font-bold'>Reset Password</button>
      </form>
    </div>
  );
}

export default Forgot_Pswd;
