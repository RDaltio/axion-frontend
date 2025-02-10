import Header from './Header';
import Card from './Card';

interface ListPageProps {
    title: string;
    items: { name: string; link: string }[];
}

const ListPage: React.FC<ListPageProps> = ({ title, items }) => (
    <div style={{ backgroundColor: '#F9F9F9' }} className="min-h-screen">
        <Header />
        <div className="container mx-auto py-6">
            <h2 className="text-[#4A4A4A] text-lg mb-2">{title}</h2>
            <div className="h-2 w-full bg-gradient-to-r from-[#AE23A9] to-[#DC4E1B] mb-6"></div>

            <div className="w-full grid grid-cols-3 gap-10">
                {items.map((item, index) => (
                    <div key={index} className="justify-items-center">
                        <Card key={index} name={item.name} link={item.link} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ListPage;
