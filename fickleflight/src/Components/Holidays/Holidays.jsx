import React from 'react'
import { DataHolidays } from '../../Data/Data'
import imhdd from '../../assets/Images/Holidays/BoracayImage.png'
import ArrowRight from '../../assets/Icons/arrow-right.png'

export default function Holidays() {
    return (
        <HolidayCard HolidayData={DataHolidays} />
    )
}



function HolidayCard({ HolidayData }) {


    return (
        <>
            {
                HolidayData.map((item, index) => {
                    return (
                        <div key={index} className='w-full h-[60vh] pl-[56px] pr-[56px] mt-[20px]'>
                            <div className='flex flex-row justify-between'>
                                <h1 className='text-[17px] text-[#303030] font-bold'>{item.Title}</h1>
                                <h1 className='inline-flex flex items-center text-[13px] text-[#1262AE] font-medium'>{item.Showall}<img className='w-4 h-4' src={ArrowRight} alt="" /></h1>
                            </div>

                            <div className=' flex flex-row flex-wrap gap-[52px]'>


                                {item.cards.map((item, index) => {
                                    return (
                                        <div key={index} className='p-2 '>
                                            <img src={item.BgImage} alt="" className=' w-[18vw] rounded-t-[12px]' />
                                            <div className='w-[18vw] p-3 text-white flex justify-between border-b-2 border-r-2 border-l-2 border-[#EAEAEA]  '>
                                                <div className=''>
                                                    <h1 className='text-[#424242]'>{item.Name}</h1>
                                                    <h1 className='text-[#999999]'>{item.Code}</h1>
                                                </div>
                                                <div className='text-2xl font-bold text-[#1262AF] flex justify-end'>{item.Cost}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div >
                    )
                })
            }
        </>
    )
}
