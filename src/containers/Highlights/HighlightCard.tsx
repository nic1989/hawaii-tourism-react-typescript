import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HighLight } from '../../models/highlight';
import { slug } from '../../utils/utils';

const HighlightCard: FC<{}> = () => {
    const result: any = useSelector(state => state);
    let renderList = '';
    if (result.highLightsList.length === 0) {
        return (
            <div className="text-center"><h3>No data found</h3></div>
        )
    } else {
        renderList = result.highLightsList.highlights.map((item: HighLight, index: number) => {
            const { title, image, description } = item;
            return (
                <div className="col-md-4 col-xs-4" key={index}>
                    <div className="card">
                        <img src={image} alt={title}></img>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p title={description} className="card-text">{description.length > 40 ? description.substring(0, 40)+'...' : description}</p>
                            <Link className="mt-2 arrow-icon" to={`/activity/${slug(title)}`}>
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        })
    }
    
    return <>{renderList}</>
}

export default HighlightCard;