import React from 'react';
import fickleflightlogo from '../../assets/Images/Symbols.png';
import facebook from '../../assets/Images/FooterIcon/facebook.png';
import instagram from '../../assets/Images/FooterIcon/instagram.png';
import twitter from '../../assets/Images/FooterIcon/twitter.png';
import { FooterData } from '../../Data/Data';

export default function Footer() {
    return (
        <div>
            <FooterBackground data={FooterData} />
        </div>
    );
}

function FooterBackground({ data }) {
    return (
        <div
            className="w-full h-auto flex p-8 "
            style={{
                background: 'linear-gradient(135deg, #0C5CA9 0%, #0C5CA9 10%, #2796D5 80%)',
            }}
        >
            <div className="w-full flex flex-col lg:flex-row justify-between items-start">
                <div className="flex-1 mb-8 lg:mb-0">
                    <img src={fickleflightlogo} alt="Fickle Flight Logo" className="h-8 w-44 mb-4" />
                    <p className="text-white mb-4">
                        Fickle Flight is your one-stop travel portal. We offer hassle-free flight and hotel bookings.
                        We also have all your flight needs in our online shop.
                    </p>
                    <div className="flex gap-2">
                        <img src={facebook} alt="Facebook" className="h-6 w-6" />
                        <img src={instagram} alt="Instagram" className="h-6 w-6" />
                        <img src={twitter} alt="Twitter" className="h-6 w-6" />
                    </div>
                </div>

                <div className="flex-1 flex flex-wrap gap-8 justify-between">
                    {data.map((section, index) => (
                        <div key={index} className="flex flex-col text-white">
                            <h1 className="font-bold mb-2">{section.Heading}</h1>
                            <a href="#" className="mb-1 hover:underline">
                                {section.About}
                            </a>
                            <a href="#" className="mb-1 hover:underline">
                                {section.News}
                            </a>
                            <a href="#" className="mb-1 hover:underline">
                                {section.Career}
                            </a>
                            <a href="#" className="mb-1 hover:underline">
                                {section.Howwork}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
