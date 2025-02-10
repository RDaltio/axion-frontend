import Image from 'next/image';

interface CardProps {
    name: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ name, link }) => (
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
);

export default Card;