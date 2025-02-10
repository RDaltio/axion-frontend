import ListPage from '../components/ListPage';

const people = [
  { name: 'Obama', image: '/imgs/obama.jpg' },
  { name: 'Gaga', image: '/imgs/gaga.jpg' },
  { name: 'Senna', image: '/imgs/senna.jpg' },
  { name: 'Steve', image: '/imgs/steve.jpg' },
  { name: 'Serena', image: '/imgs/serena.jpg' },
];

export default function People() {
  return <ListPage title="LIST OF PEOPLE" items={people} />;
}