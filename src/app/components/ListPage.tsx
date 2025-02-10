import Header from './Header';
import Card from './Card';

interface ListPageProps {
    title: string;
    items: { name: string; image: string }[];
}

const ListPage: React.FC<ListPageProps> = ({ title, items }) => (
    <div style={{ backgroundColor: '#F9F9F9' }}>
        <Header />
        <div className="container mx-auto p-6">
            <h2 className="text-[#4A4A4A] text-lg mb-2">{title}</h2>
            <div className="h-2 w-full bg-gradient-to-r from-[#AE23A9] to-[#DC4E1B] mb-6"></div>

            <div className="w-full grid grid-cols-3 gap-10">
                {items.map((item, index) => (
                    <div key={index} className="w-full">
                        <Card key={index} name={item.name} image={item.image} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ListPage;
