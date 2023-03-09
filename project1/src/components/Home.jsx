
import { BsFillTelephoneFill, BsFillClockFill } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import React, { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import Logo from '../src/assests/plainlogo.png';
import Whitelogo from '../src/assests/plainlogo.png';
import {GiPistolGun} from 'react-icons/gi'
import {GiHandcuffs} from 'react-icons/gi'
import {MdOutlineFamilyRestroom} from 'react-icons/md'
import {FaBalanceScale} from 'react-icons/fa'
import {FaBriefcaseMedical} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import {FaBusinessTime} from 'react-icons/fa'
import {RiTeamFill} from 'react-icons/ri'

import whitelogo from '../src/assests/logo.png'
import logo from '../src/assests/plainlogo.png'
import { IoChevronForwardSharp } from 'react-icons/io5'




function App() {
  const [nav, setNav] = useState(false)
  return (
    <div>
       <header className="bg-[#242A36] text-white p-4 mb-1 h-16">

<div className="flex flex-col md:flex-row md:justify-between">
  <div className="flex flex-col  mb-4 md:mb-0">
    <a href="hello@jayantbhatt.in" className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold '>@ hello@jayantbhatt.in</a>
  </div>
  <div className="flex flex-col  mb-4 md:mb-0">
    <BsFillTelephoneFill size={15} /> <a href="tel:+18002162020" className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold '> 011-41324533 |  +91 8447185912</a>

  </div>
  <div className="flex flex-col  mb-4 md:mb-0">
    <p className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold'> <BsFillClockFill size={15} />Mon - Sat: 10.00 am - 8.00 pm</p>
  </div>
  <div className="flex flex-col ">
    <p className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold'><IoLocationSharp size={15} />A71, New Friends Colony, New Delhi – 110025</p>
  </div>
</div>
</header>

<div className="flex justify-between items-center w-full h-40 px-4 text-black text-xs font-semibold relative">
      <div>
        <img src={Logo} width='186.56' height='43' alt="logo" className='cursor-pointer ' />
      </div>

      <ul className='hidden md:flex text-black'>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200 hover:text-yellow-400 focus:text-yellow-400'>Home</li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'>areas of practice</li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'>publication & media</li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'>career</li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'>contact us</li>

      </ul>


      <div
        onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
        {nav ? <FaTimes size={30} color="white" /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col items-left text-left absolute top-0 left-0 w-full h-screen bg-stone-800 text-white'>
          <li><img src={Whitelogo} alt="logo" /></li>
          <li className='cursor-pointer uppercase font-small
              hover:scale-105 duration-200 py-2 px-20 mt-20 focus:text-yellow-400'>Home</li>
          <li className=' cursor-pointer uppercase font-small
              hover:scale-105 duration-200 py-2 px-20 focus:text-yellow-400'>areas of practice</li>
          <li className='px-20 py-2 cursor-pointer uppercase font-small
              hover:scale-105 duration-200 focus:text-yellow-400'>publication & media</li>
          <li className='px-20 py-2 cursor-pointer uppercase font-small
             hover:scale-105 duration-200 focus:text-yellow-400'>career</li>
          <li className='px-20 py-2 cursor-pointer uppercase font-small
             hover:scale-105 duration-200 focus:text-yellow-400'>contact us</li>


        </ul>
      )}



    </div>


    <div className='w-100% h-fit   text-black px-20'>
        <div className=' p-4 flex flex-col justify-left w-full h-full text-sm font-light mx-auto'>
            <div className='pb-4'>
                <h2 className='inline font-bold text-4xl border-b-4 border-yellow-600 text-yellow-500'>About Us</h2>
            </div>
            <div className='pb-2 text-base font-medium leading-normal'>
            Spear-headed by Adv. Jayant Bhatt, the Chamber provides litigation-related diligence, counseling, and solutions. His office caters to varied clients comprising of Governmental and Non-Governmental Bodies, Multinationals, Financials Institutions and individuals in an array of matters.
            </div>
            <p className='mt-3 leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa vitae tortor condimentum lacinia quis. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod.<br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>

    <div className='w-full h-1/4 md:h-1/2'>
        <div className='grid grid-cols-1 md:grid-cols-4 px-20 pb-48 pt-10 '>

           
                 <div  className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer '>
                    <div className='flex items-center justify-center'>
                       <RiTeamFill className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>Business Law</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>

                <div  className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                    <div className='flex items-center justify-center'>
                       < GiPistolGun className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>Criminal Law</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>
                

                <div  className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer '>
                    <div className='flex items-center justify-center'>
                       <GiHandcuffs className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>White-Collar Crime</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>


                <div  className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                    <div className='flex items-center justify-center'>
                   < FaBusinessTime className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>Privacy & Data Protection</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>


                <div  className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                    <div className='flex items-center justify-center'>
                       <MdOutlineFamilyRestroom className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>Family Law</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>


                <div  className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer '>
                    <div className='flex items-center justify-center'>
                       < FaBalanceScale className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>Constitutional law</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>


                <div  className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                    <div className='flex items-center justify-center'>
                       <FaBriefcaseMedical className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>Medical Negligence</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>

                <div  className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer '>
                    <div className='flex items-center justify-center'>
                       < FaHome className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>Civil & Consumer Dispute</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>

        </div>      
    </div>

    <div>
        <footer className="bg-[#242A36] text-white py-10">
            <div className="flex flex-wrap flex-col justify-center md:flex-row md:justify-between">
                <div className="mx-4 mb-8 md:mb-0 flex flex-col items-center flex-1 w-full">
                    <img src={whitelogo} alt="Company Logo" className="h-20 w-auto mb-4" />
                    <div className="max-w-xs text-left ">
                        <p className="text-m overflow-hidden text-gray-400 pb-4" style={{ textOverflow: 'ellipsis' }}>
                            Chambers of Jayant Bhatt caters to varied clients comprising of Governmental and Non-Governmental Bodies, Multinationals, Financial Institutions and individuals in an array of matters.
                        </p>
                    </div>
                </div>
                <div className="mx-4 mb-8 md:mb-0 uppercase item-center flex-1 w-full">
                    <h4 className="text-lg mb-10 capitalize">Useful Links</h4>
                    <ul>
                        <li className="mb-2"><div className="inline-flex items-center font-bold">
                            <IoChevronForwardSharp className="mr-1" />
                            <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer">areas of practice</span>
                        </div>
                        </li>
                        <li className="mb-2"><div className="inline-flex items-center font-bold">
                            <IoChevronForwardSharp className="mr-1" />
                            <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer">publication & media</span>
                        </div></li>
                        <li className="mb-2"><div className="inline-flex items-center font-bold">
                            <IoChevronForwardSharp className="mr-1" />
                            <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer">contact us</span>
                        </div></li>
                        <li className="mb-2 text-sm"><div className="inline-flex items-center font-bold">
                            <IoChevronForwardSharp className="mr-1" />
                            <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer">career</span>
                        </div></li>
                    </ul>
                </div>
                <div className="mx-4 mb-8 md:mb-0 flex-1 w-full">
                    <h4 className="text-lg mb-4">Contact Us</h4>
                    <div className="flex flex-col mb-4 md:mb-4">
                        <BsFillTelephoneFill size={10} /> <a href="tel:+18002162020" className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold '> 011-41324533 |  +91 8447185912</a>

                    </div>
                    <div className="flex flex-col mb-4 md:mb-4">
                        <p className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold'> <BsFillClockFill></BsFillClockFill>Mon - Sat: 10.00 am - 8.00 pm</p>
                    </div>
                    <div className="flex flex-col">
                        <p className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold'><IoLocationSharp></IoLocationSharp>A71, New Friends Colony, New Delhi – 110025</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    </div>

  );
}

export default App;
