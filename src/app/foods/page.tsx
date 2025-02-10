import ListPage from '../components/ListPage';

const foods = [
  { name: 'Steak', image: '/imgs/steak.jpg' },
  { name: 'Rice', image: '/imgs/rice.jpg' },
  { name: 'Apple', image: '/imgs/apple.jpg' },
  { name: 'Pasta', image: '/imgs/pasta.jpg' },
  { name: 'Avocado', image: '/imgs/avocado.jpg' },
  { name: 'Cake', image: '/imgs/cake.jpg' },
];

export default function Foods() {
  return <ListPage title="LIST OF FOODS" items={foods} />;
}