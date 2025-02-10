'use client';

import FetchList from '../components/FetchList';
import WithAuth from '../components/WithAuth';

const People = () => <FetchList url="http://localhost:1337/people" title="LIST OF PEOPLE" />;

export default WithAuth(People);