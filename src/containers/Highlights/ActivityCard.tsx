import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Activities } from '../../models/activity';


const ActivityCard: FC<{}> = () => {
    const result: any = useSelector(state => state)
    if (result.activityList.length === 0) {
        return (
            <div className="text-center"><h3>...Loading</h3></div>
        )
    }
    const myStyle = {
        backgroundImage: `url(${result.activityList.activities.image})`,
        width: '100%',
        height: '100vh',
        marginTop: '-70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    return (
        <div>
            <div style={myStyle}>
                <h1 className="bg-slider-text">{result.activityList.activities.name}</h1>
            </div>
            <div className="container mt-5">
                {result.activityList.activities.description}
            </div>
            <div className="category-bg mt-3">
                <div className="container">
                    <h4 className="pt-3">Activities</h4>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-group">
                                {result.activityList.activities?.activities.map((item: Activities, index: number) => (
                                    <li className="list-group-item mb-2 bottom-round" key={index}>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default ActivityCard;