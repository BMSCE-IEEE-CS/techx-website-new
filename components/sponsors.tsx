'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import localFont from "next/font/local";
const spacex = localFont({ src: "../app/SpaceX.ttf" });

interface SponsorImage {
    src: string;
    alt: string;
}

const sponsors: SponsorImage[] = [
    { src: '/images/ieee-logo.png', alt: 'IEEE' },
    { src: '/images/ieee-csbc.png', alt: 'IEEE CSBC' },
    { src: '/images/ieee-cs-logo.png', alt: 'IEEE CS' },
    { src: '/images/bmsce-ieee-cs.png', alt: 'BMSCE IEEE CS' },
    { src: '/images/Bangalore-Section-Logo.png', alt: 'IEEE BANGALORE SECTION' },
    { src: '/images/syplogo.png', alt: 'IEEE CS SYP' },
    { src: '/images/ieee-cs-cu.png', alt: 'IEEE CS CU' },
];

const Sponsors: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === sponsors.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-[50%] bg-black py-8 flex justify-center">
            <div className="w-[10%] ml-20">
                <div className="flex transition-transform duration-500 ease-in-out"
                     style={{
                         transform: `translateX(-${currentIndex * 80}%)`,
                         width: `${sponsors.length * 80}%`
                     }}>
                    {sponsors.map((sponsor, index) => (
                        <div key={index} className="w-[80%] flex-shrink-0 px-4">
                            <Image
                                src={sponsor.src}
                                alt={sponsor.alt}
                                width={200}
                                height={100}
                                objectFit="contain"
                                className="w-full h-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
