import React, { useState } from 'react';
import { MenuIcon, XIcon } from "@heroicons/react/outline"; 
import SignUpModal from '../SignupModal/SignupModal';
import SignInModal from '../SigninModal';
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll, } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)

  const handleClick = () => setNav(!nav);

  const closeSignUpModal = () => setIsSignUpModalOpen(false);
  const handleSignInClick = () => setIsSignInModalOpen(true);
  const handleSignUpClick = () => setIsSignUpModalOpen(true)
  const closeSignInModal = () => setIsSignInModalOpen(false)


  return (
    <div className='w-screen  md:h-[80px] z-30 bg-slate-200 fixed drop-shadow-lg'>
      <div className='w-full h-full flex justify-between items-center px-2'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-6 sm:text-4xl'>E-Billing</h1>
          <ul className='hidden md:flex'>
            <li><Link  to="home"  smooth={true} duration={500} >Home</Link></li>
            <li><Link  to="utility"  smooth={true} offset={-200} duration={500} >Utility</Link></li>
            <li><Link  to="princing"  smooth={true} offset={-50} duration={500} >Princing</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button onClick={handleSignInClick} className='border-none bg-transparent text-black mr-4'>Sign In</button>
          <button onClick={handleSignUpClick} className='px-8 py-3'>Sign Up</button> 
        </div>
      </div>
      <div className='md:hidden' onClick={handleClick}>
        {isSignUpModalOpen && <SignUpModal isOpen={isSignUpModalOpen} onClose={closeSignUpModal} /> }
        {isSignInModalOpen && <SignInModal isOpen ={isSignInModalOpen} onClose={closeSignInModal} /> }
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className='w-5' />
        }
      </div>
      {nav && 
      <div className='w-full h-full bg-slate-300 flex md:hidden flex-col justify-between items-center px-2'>
        <div className='flex items-center'>
          {/* <h1 className='text-3xl font-bold mr-6 sm:text-4xl'>E-Billing</h1> */}
          <ul className='flex flex-col'>
          <li><Link  to="home"  smooth={true} duration={500} >Home</Link></li>
            <li><Link  to="utility"  smooth={true} offset={-200} duration={500} >Utility</Link></li>
            <li><Link  to="princing"  smooth={true} offset={-50} duration={500} >Princing</Link></li>
          </ul>
        </div>
        <div className='flex justify-between pr-4'>
          <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
          <button onClick={handleSignUpClick} className='px-8 py-3'>Sign Up</button> 
        </div>
      </div>}
      {isSignUpModalOpen && <SignUpModal setIsSignUpModalOpen={setIsSignUpModalOpen} />}
      {isSignInModalOpen && <SignInModal setIsSignInModalOpen={setIsSignInModalOpen} />}
    </div>
  );
}

export default Navbar;
