import React from 'react'
import FlickerFlightLogo from '../../assets/Images/Fickleflight Logo.png'
import Notification from '../../assets/Images/Vector.png'
import ProfilePicture from '../../assets/Images/profile picture.png'


function Header() {

    let Options = ['Explore', 'Search', 'Hotels', 'Offers'];

    let AllOptions = Options.map((item, index) => {
        return (
            <li key={index} className={item == 'Explore' ? 'w-[43px] h-[16px] text-[#1262AF]' : 'w-[43px] h-[16px] cursor-pointer'}>{item}</li>
        );
    });



    return (
        <div className=' w-full bg-white'>
            <div className='  flex justify-between items-center p-4 ml-[80px] mr-[80px] '>
                <img src={FlickerFlightLogo} alt="" className='w-[174px] h-[33px]' />
                <ul className='flex flex-row gap-7 items-center font-serif '>
                    {AllOptions}
                    <div className='flex gap-4 ml-4 items-center'>
                        <img src={Notification} alt="" className='h-[24px] w-[24px]' />
                        <img src={ProfilePicture} alt="" className='h-[36px] w-[36px]' />
                    </div>
                </ul>

            </div>
        </div>

    )
}

export default Header
