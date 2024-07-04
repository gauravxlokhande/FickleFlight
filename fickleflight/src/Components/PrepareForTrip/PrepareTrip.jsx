import React from 'react'
import { IconData } from '../../Data/Data'

export default function PrepareTrip() {


    return (
        <TripCard data={IconData} />
    )
}



function TripCard({ data }) {
    console.log(data);
    return (
        <div className='w-full h-[17vh]'>
            <div className='mr-[73px] ml-[60px]'>
                <h1 className='text-[#CECECE] '>Prepare For Your trip</h1>
                <div className=' flex flex-row justify-between'>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className=' flex items-center flex-col'>
                                <img src={item.Icon} alt="" className='mt-[13px] w-[50px]' />
                                <h1 className='text-[#CECECE] text-[15px] '>{item.IconName}</h1>
                            </div>
                        )

                    })}

                </div>
            </div>
        </div>
    )
}

