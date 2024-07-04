import React from 'react'
import ArrowRight from '../../assets/Icons/arrow-right.png'
import { Destinations } from '../../Data/Data'


export default function PlanTrips() {

    return (
        <div>
            <ReusableTrips Destinations={Destinations} />
        </div>
    )
}

function ReusableTrips({ Destinations }) {
    return (
        <>
            {Destinations.map((item, index) => {
                let StoreLength = item.cards.length
                return (
                    <div key={index} className='w-full h-[48vh] p-[60px]'>
                        <div className='flex flex-row justify-between'>
                            <h1 className='text-[15px] text-[#1262AE] font-medium'>{item.Title}</h1>
                            <h1 className='inline-flex flex items-center text-[13px] text-[#1262AE] font-medium'>{item.Showall}<img className='w-4 h-4' src={ArrowRight} alt="" /></h1>
                        </div>
                        <h1 className='font-bold text-[#303030] text-[17px]'>{item.Subtitle}</h1>
                        <div className=' flex flex-row flex-wrap gap-[52px]'>
                            {item.cards.map((card, index) => {
                                return (
                                    <div key={index} className={StoreLength > 4 ? 'p-2 mt-[10px]' : 'p-2'}>
                                        <img src={card.BgImage} alt="" className=' absolute w-[18vw] rounded-md' />
                                        <div className='w-[18vw] p-3 text-white relative top-[-1]'>
                                            <div className='flex justify-between'>
                                                <h1>{card.From}</h1>
                                                <h1>{card.To}</h1>
                                            </div>
                                            <div className='text-2xl font-bold flex justify-end'>{card.Cost}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </>
    )
}


