import GreeceImage from '../assets/Images/PopularDestinations/GreeceImage.png';
import NorwayImage from '../assets/Images/PopularDestinations/NorwayImage.png';
import ParisImage from '../assets/Images/PopularDestinations/ParisImage.png';
import TuscanyImage from '../assets/Images/PopularDestinations/TuscanyImage.png';

import AttractionIcon from '../assets/Icons/Attractions Icon.png';
import CommuteIcon from '../assets/Icons/Commute icon.png';
import EatsIcon from '../assets/Icons/Eats Icon.png';
import HotelIcon from '../assets/Icons/Hotel Icon.png';
import MoviesIcon from '../assets/Icons/Movies icon.png';
import TaxiIcon from '../assets/Icons/Taxi Icon.png';


import BoracayImage from '../assets/Images/Holidays/BoracayImage.png'
import PalawanImage from '../assets/Images/Holidays/PalawanImage.png'
import SwitzerlandImage from '../assets/Images/Holidays/SwitzerlandImage.png'
import unsplash_5MV818tzxeo from '../assets/Images/Holidays/unsplash_5MV818tzxeo.png'





let IconData = [
    { Icon: AttractionIcon, IconName: "Attraction" },
    { Icon: CommuteIcon, IconName: "Commute" },
    { Icon: EatsIcon, IconName: "Eats" },
    { Icon: HotelIcon, IconName: "Hotel" },
    { Icon: MoviesIcon, IconName: "Movies" },
    { Icon: TaxiIcon, IconName: "Taxi" }
];

let Destinations = [
    {
        Title: 'Plan your next trip',
        Subtitle: 'Most Popular Destinations',
        Showall: 'View all destinations',
        cards: [
            { BgImage: GreeceImage, From: 'Greece', To: 'Austria', Cost: '$699' },
            { BgImage: NorwayImage, From: 'Norway', To: 'London', Cost: '$1099' },
            { BgImage: ParisImage, From: 'Paris', To: 'Austria', Cost: '$699' },
            { BgImage: TuscanyImage, From: 'Tuscany', To: 'Paris', Cost: '$895' },
        ]
    }
];

let DataHolidays = [
    {
        Title: 'Recommended Holidays',
        Showall: 'View all holidays',
        cards: [
            { BgImage: BoracayImage, Name: 'Bali', Code: '403N', Cost: '$899' },
            { BgImage: PalawanImage, Name: 'Swiss', Code: '6D5N', Cost: '$900' },
            { BgImage: SwitzerlandImage, Name: 'Boracay', Code: '4D11', Cost: '$699' },
            { BgImage: unsplash_5MV818tzxeo, Name: 'Palawan', Code: '5DH1', Cost: '$700' },

        ]
    }
];



let FooterData = [
    {
        Heading: 'Company',
        About: 'About Us',
        News: 'News',
        Career: 'Careers',
        Howwork: 'How we work'
    },
    {
        Heading: 'Support',
        About: 'Account',
        News: 'Support Center',
        Career: 'FAQ',
        Howwork: 'Accessibility'
    },
    {
        Heading: 'More',
        About: 'Covid Advisory',
        News: 'Airline Fees',
        Career: 'Tips',
        Howwork: 'Quarantine Rules'
    }
]





export { IconData, Destinations, DataHolidays, FooterData };
