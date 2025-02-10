'use client';

import FetchList from '../components/FetchList';
import WithAuth from '../components/WithAuth';

const Places = () => <FetchList url="http://localhost:1337/places" title="LIST OF PLACES" />;

export default WithAuth(Places);