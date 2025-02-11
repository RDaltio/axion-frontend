import { useState } from 'react';
import Image from 'next/image';

interface CardProps {
    name: string;
    link: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ name, link, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div 
                className="relative w-full aspect-square overflow-hidden shadow-[0px_2px_7px_3px_rgba(0,0,0,0.1)] group cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                <Image 
                    src={link}
                    alt={name} 
                    width={300} 
                    height={300} 
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-white/15 w-full text-white p-2 text-center flex items-end text-4xl font-bold p-6">
                    {name}
                </div>
            </div>

            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <div 
                        className="bg-white p-6 shadow-lg max-w-lg w-full relative flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <div className="relative w-full aspect-square overflow-hidden shadow-[0px_2px_7px_3px_rgba(0,0,0,0.1)]">
                            <Image 
                                src={link} 
                                alt={name} 
                                width={300} 
                                height={300} 
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-white/15 w-full text-white p-2 text-center flex items-end text-4xl font-bold p-6">
                                {name}
                            </div>
                        </div>
                        <p className="text-lg text-[#4A4A4A] mt-4 text-justify">{description}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;