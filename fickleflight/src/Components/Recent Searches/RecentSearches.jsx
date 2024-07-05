import React from 'react'
import duration from '../../assets/Images/Duration.png'
import { memo } from "react";
function RecentSearches() {

    let Flights = [
        {
            From: "SIN",
            To: "LAX",
            DepartedOn: "7 Sep 2021"
        },
        {
            From: "MY",
            To: "DUB",
            DepartedOn: "7 Sep 2021"
        }
    ];

    let FlightsComponent = Flights.map((item, index) => {
        return (
            <div key={index} className=' relative border-2 border-[#EAEAEA] rounded w-[43vw] h-[15vh] '>
                <div className='w-[43vw] flex flex-row justify-between'>
                    <h1 className='ml-[20px] mt-2 font-bold text-blue-700' >{item.From}</h1>
                    <img src={duration} alt="" className='w-[100px] h-[30px] mt-2' />
                    <h1 className=' mr-[20px] mt-2 font-bold text-blue-700' >{item.To}</h1>
                </div>
                <h1 className=' mt-2 font-bold text-blue-700 absolute right-[190px]'>Depart On: <span className='text-black font-normal'>{item.DepartedOn}</span></h1>
            </div>
        )
    });




    return (
        <div>
            <div className='w-full h-[33vh]'>
                <div className='p-[60px] '>
                    <h1 className='font-bold'>RECENT SEARCHES</h1>
                    <div className='flex flex-row gap-[30px] flex-wrap mt-[10px] '>
                        {FlightsComponent}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default memo(RecentSearches) 
