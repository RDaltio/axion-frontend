'use client';

import FetchList from '../components/FetchList';
import WithAuth from '../components/WithAuth';

const Foods = () => <FetchList url="http://localhost:1337/foods" title="LIST OF FOODS" />;

export default WithAuth(Foods);