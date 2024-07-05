
import BannerBg from "../../assets/Images/BannerBackground.png";
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
            <Hero />
        </div>
    );
}

function Hero() {

    let content = {
        heading: 'Let’s explore & travel the world',
        description: 'Find the best destinations and the most popular stays!',
        searchheading: 'Search flights'
    }

    return (
        <div className='text-[#FFFFFF] relative flex items-center flex-col justify-center h-screen w-full bg-[#1262AE]'>
            <img src={BannerBg} alt="" className='absolute h-full w-full object-cover' />

            <div className='flex items-center flex-col absolute top-[140px] text-center px-4'>
                <h1 className='text-3xl md:text-5xl font-bold'>{content.heading}</h1>
                <p className='text-md md:text-[17px] leading-7 md:leading-[55px]'>{content.description}</p>
            </div>

            <div className='top-[260px] text-gray-800 flex flex-col absolute w-[90%] md:w-[1000px] p-4 md:p-[20px] h-auto md:h-[158px] rounded-md bg-white shadow-lg'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <h1 className='font-bold text-lg md:text-[25px]'>{content.searchheading}</h1>
                    <div className='mt-2 md:mt-0'>
                        <FormControl>
                            <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group">
                                <div className='flex text-black'>
                                    <FormControlLabel value="Return" control={<Radio />} label="Return" />
                                    <FormControlLabel value="One-way" control={<Radio />} label="One-way" />
                                </div>
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-5 mt-4'>
                    <TextField
                        className='w-full md:w-64'
                        required
                        id="outlined-required"
                        label="Departure"
                    />
                    <TextField
                        className='w-full md:w-64'
                        required
                        id="outlined-required"
                        label="Arrival"
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker renderInput={(props) => <TextField {...props} className='w-full md:w-64' />} />
                    </LocalizationProvider>
                    <Button variant="contained" className='w-full md:w-auto' style={{ backgroundColor: '#F99A0E', color: '#FFFFFF' }}>
                        Search Flights
                    </Button>
                </div>
            </div>
        </div>
    );
}
