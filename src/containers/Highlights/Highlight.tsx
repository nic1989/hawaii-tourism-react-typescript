import React, { FC } from 'react';
import HighlightCard from './HighlightCard';

const Hightlight: FC<{}> = () => {
    return (
        <>
            <div className="container mt-5">
                <h4 className="mb-3">HightLights</h4>
                <div className="row">
                    <HighlightCard />
                </div>
            </div>
        </>
    )
}

export default Hightlight;
