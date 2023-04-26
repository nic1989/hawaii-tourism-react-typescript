import React, { FC } from 'react';

const TravelGuide: FC<{}> = () => {
    return (
        <div className="row travel-guide-card">
            <div className="col-md-6">
                <h5 className="travel-title">Hadwin Malone</h5>
                <p className="fs-xsmall">Guide since 2012</p>
                <button className="btn btn-outline-primary btn-text-border mt-5">Contact</button>
            </div>
            <div className="col-md-6">
                <img className="travel-guide-img" src={'../images/guide_img.jpg'} alt="Guide" width={150} height={150} />
            </div>
        </div>
    )
}

export default TravelGuide;