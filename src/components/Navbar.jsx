import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
const Navbar = () => {
   const {user,logoutUser} =useContext(StoreContext);
   return (
      <nav className='bg-white p-4 sticky top-0'>
         <div className='flex container mx-auto justify-between items-center'>
            <div className='flex gap-2 items-center'>
               <Link to={"/"}>
                  <img src={assets.logo} alt='' className='w-12 h-12' />
               </Link>
               <p className='hidden sm:block text-2xl'>
                  Iram <span className='font-bold text-2xl'>Blog</span></p>

            </div>
            {/* center content */}
            <ul className='hidden sm:flex gap-5  text-xl font-normal justify-center
             items-center text-gray-700'>
               <Link to={"/"} className='cursor-pointer hover:text-blue-500 duration-300'>
                  Home
               </Link>
               <Link to={"/blogs"} className='cursor-pointer hover:text-blue-500 duration-300'>
                  Blogs
               </Link>
               <Link to={"/about"} className='cursor-pointer hover:text-blue-500 duration-300'>
                  About
               </Link>
               <Link to={"/contact"} className='cursor-pointer hover:text-blue-500 duration-300'>
                  Contact
               </Link>
            </ul>
            {
            user? <div className='flex gap-2'>
               <Link to={"/dashboard"} className='bg-black px-6 py-2 rounded-full text-white'>
               Dashboard
               </Link>
               <button onClick={logoutUser} className='bg-blue-500 text-white px-6 py-2 rounded-full
             cursor-pointer hover:bg-blue-600 duration-300'>Logout</button>
            </div>:(
                <Link to={"/login"}className='bg-blue-500 text-white px-8 py-2 rounded-full
             cursor-pointer hover:bg-blue-600 duration-300'
             >
               Signin</Link>
)}
 </div>
 </nav>

          
   );
};
export default Navbar;