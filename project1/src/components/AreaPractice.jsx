import React from 'react'
import { AiOutlineLine } from 'react-icons/ai';
import {GiPistolGun} from 'react-icons/gi'
import {GiHandcuffs} from 'react-icons/gi'
import {MdOutlineFamilyRestroom} from 'react-icons/md'
import {FaBalanceScale} from 'react-icons/fa'
import {FaBriefcaseMedical} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import {FaBusinessTime} from 'react-icons/fa'
import {RiTeamFill} from 'react-icons/ri'
import {GiFullMotorcycleHelmet} from 'react-icons/gi'

const AreaPractice = () => {
  return (
    <div>
       

        <div className='w-100% h-fit flex items-center justify-between bg-yellow-500  mr-10 ml-10 mb-20 text-6xl' >
        <div className='text-md  md:px-20 text-white pt-10'>
            <div className='font-extrabold'>
                <h2>AREAS OF PRACTICE</h2>  
            </div> 
            <AiOutlineLine className=' w-1/6 h-1/5'/>
        </div>
             
    </div>
        

    <div className='w-80% h-1/4 md:h-1/2 mx-20 bg-slate-200 flex justify-center py-10 mb-20'>
    <div className='grid grid-cols-1 md:grid-cols-3   gap-8 '>

       <div>
             <div  className='group bg-gray-800 grid grid-row-2 p-0 hover:cursor-pointer '>
                <div className='flex items-center justify-center'>
                   <RiTeamFill className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>Business Law</p>
               </div>
            </div>
            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text px-6 pb-10 pt-4'>
            <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>

        </div>
           
        <div>

            <div  className='group bg-gray-600 grid grid-row-2 p-0 hover:cursor-pointer '>
                <div className='flex items-center justify-center'>
                   < GiPistolGun className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>Criminal Law</p>
               </div>
              
            </div>

            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-black px-6 pb-10 pt-4'>
            <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>

        </div>
            
        <div>
            <div  className='group bg-gray-800 grid grid-row-2 p-0 hover:cursor-pointer '>
                <div className='flex items-center justify-center'>
                   <GiHandcuffs className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>White-Collar Crime</p>
               </div>
            </div>
            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-black px-6 pb-10 pt-4'>
            <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>
        </div>

        <div>

            <div  className='group bg-gray-600 grid grid-row-2 p-0 hover:cursor-pointer '>
                <div className='flex items-center justify-center'>
               < FaBusinessTime className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>Privacy & Data Protection</p>
               </div>
            </div>
            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-black px-6 pb-10 pt-4'>
            <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>
        </div>

        <div>
            <div  className='group bg-gray-600 grid grid-row-2 p-0 hover:cursor-pointer '>
                <div className='flex items-center justify-center'>
                   <MdOutlineFamilyRestroom className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>Family Law</p>
               </div>
            
            </div>
            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-black px-6 pb-10 pt-4'>
            <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>
        </div>

        <div>
            <div  className='group bg-gray-800 grid grid-row-2 p-0 hover:cursor-pointer '>
                <div className='flex items-center justify-center'>
                   < FaBalanceScale className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>Constitutional law</p>
               </div>
            
            </div>
            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-black px-6 pb-10 pt-4'>
            <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>
        </div>

        <div>
            <div  className='group bg-gray-600 grid grid-row-2 p-0 hover:cursor-pointer '>
                <div className='flex items-center justify-center'>
                   <FaBriefcaseMedical className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>Medical Negligence</p>
               </div>
              
            </div>
            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-black px-6 pb-10 pt-4'>
            <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>
        </div>

        <div>
            <div  className='group bg-gray-800 grid grid-row-2 p-0 hover:cursor-pointer '>
                <div className='flex items-center justify-center'>
                   < FaHome className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>Civil & Consumer Dispute</p>
               </div>
             
            </div>
            <div className=' flex text-black px-6 pb-10 pt-4'>
                <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>
        </div>

        <div>

<div  className='group bg-gray-600 grid grid-row-2 p-0 hover:cursor-pointer '>
    <div className='flex items-center justify-center'>
   < GiFullMotorcycleHelmet className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
    </div>
    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
        <p className='group-hover:text-yellow-500'>Labour & Employment Law</p>
   </div>
</div>
<div className=' flex place-content-start justify-center text-justify  text-base font-serif text-black px-6 pb-10 pt-4'>
<p className='justify-center text-justify  text-base font-serif '>
        Our corporate services help dealing with the crucial and itricate matters efficiently.
    </p>
    </div>
</div>

    </div>      
</div>



    </div>

  )
}

export default AreaPractice