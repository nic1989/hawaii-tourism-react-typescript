import React, { FC } from 'react';
import Slider from './Slider';
import Hightlight from '../Highlights/Highlight';
import CategoryList from '../Categories/CategoryList';

const Home: FC<{}> = () => {
    return (
        <>
            <Slider />
            <Hightlight />
            <CategoryList />
        </>
    )
};

export default Home;