import ListPage from '../components/ListPage';

const places = [
  { name: 'Tokyo', image: '/imgs/tokyo.jpg' },
  { name: 'Amsterdam', image: '/imgs/amsterdam.jpg' },
  { name: 'Lisbon', image: '/imgs/lisbon.jpg' },
  { name: 'Barcelona', image: '/imgs/barcelona.jpg' },
  { name: 'Paris', image: '/imgs/paris.jpg' },
  { name: 'Moscow', image: '/imgs/moscow.jpg' },
  { name: 'Rio de Janeiro', image: '/imgs/rio-de-janeiro.jpg' },
  { name: 'Ireland', image: '/imgs/ireland.jpg' },
];

export default function Places() {
  return <ListPage title="LIST OF PLACES" items={places} />;
}