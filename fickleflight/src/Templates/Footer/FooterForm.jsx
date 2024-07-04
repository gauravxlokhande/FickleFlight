import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FooterForm() {
    return (
        <div>
            <FooterCard />
        </div>
    )
}

function FooterCard() {
    return (
        <div className="w-screen h-[80vh] bg-suscribe-image bg-cover flex items-center justify-center">
            <div className="w-[75vh] h-[75vh] bg-[#F3F7Fb] flex flex-col items-center justify-center">
                <div className='flex items-center justify-center flex-col'>
                    <h1 className='font-sans font-medium  text-[#1262AE] text-[19px]'>SUBSCRIBE TO OUR NEWSLETTER</h1>
                    <h1 className='font-bold text-[24px] text-[#434343]'>Get weekly updates</h1>
                </div>

                <div className='w-[75vh] h-[50vh] bg-white mt-5 rounded-md flex flex-col gap-5 items-center justify-center'>
                    <div className='w-full flex justify-start ml-16 '>
                        <h1 className='text-[#576074] text-[17px]'>Fill in your details to join the party!</h1>
                    </div>
                    <TextField
                        className='w-[65vh]'
                        id="outlined-password-input"
                        label="Your name"
                        type="text"
                    />
                    <TextField
                        className='w-[65vh]'
                        id="outlined-password-input"
                        label="Email address"
                        type="email"
                    />
                    <div className='w-full flex justify-start ml-16 '>
                        <Button className='w-[140px] h-[45px] ' variant="contained" style={{ backgroundColor: '#F99A0E', color: '#FFFFFF' }}  >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


