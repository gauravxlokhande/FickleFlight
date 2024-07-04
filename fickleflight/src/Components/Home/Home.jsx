import Header from '../../Templates/Header/Header'
import BannerBg from "../../assets/Images/Banner  Background.png"
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';




export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
        </div>
    )
}



function Hero() {

    let content = {
        heading: 'Let’s explore & travel the world',
        description: 'Find the best destinations and the most popular stays!',
        searchheading: 'Search flights'
    }

    return (
        <div className=' text-[#FFFFFF] relative flex items-center flex-col justify-center h-screen w-full bg-[#1262AE]  ' >
            <img src={BannerBg} alt="" className='h-full w-full  ' />

            <div className='flex items-center flex-col absolute top-[140px]'>
                <h1 className='text-5xl font-bold'>{content.heading}</h1>
                <p className='text-[17px] leading-[55px]'>{content.description}</p>
            </div>

            <div className=' top-[260px] text-gray-800 flex  flex-col absolute w-[1000px] h-[158px] rounded-md bg-white'>
                <div className=' p-[20px] '>
                    <div className='flex justify-between  '>
                        <h1 className='font-bold text-[25px]'>{content.searchheading}</h1>
                        <div>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                >
                                    <div className='flex text-black' >
                                        <FormControlLabel value="Return" control={<Radio />} label="Return" />
                                        <FormControlLabel value="One-way" control={<Radio />} label="One-way" />
                                    </div>
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row  gap-5 relative left-[16px]'>
                    <TextField
                        className='w-64'
                        required
                        id="outlined-required"
                        label="Departure"
                    // defaultValue="Hello World"
                    />
                    <TextField
                        className='w-64'
                        required
                        id="outlined-required"
                        label="Arrival"
                    // defaultValue="Hello World"
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                    </LocalizationProvider>
                    <Button variant="contained" style={{ backgroundColor: '#F99A0E', color: '#FFFFFF' }}>Search Flights</Button>
                </div>
            </div>
        </div>
    )
}


