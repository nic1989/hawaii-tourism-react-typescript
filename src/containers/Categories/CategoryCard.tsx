import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Category } from '../../models/category';

const CategoryCard: FC<{}> = () => {
    const result: any = useSelector(state => state);
    let renderList = '';
    if (result.categoryList.length === 0) {
        return (
            <div className="text-center"><h3>No data found</h3></div>
        )
    } else {
        renderList = result.categoryList.categories.map((item: Category, index: number) => {
            const { name } = item;
            return (
                <li className="list-group-item mb-2 bottom-round" key={index}>
                    {name}
                    <Link className="arrow-icon bg-none" to="/">
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </li>
            )
        })
    }
    return (
        <>
            <ul className="list-group">
                {renderList}
            </ul>
        </>
    )
}

export default CategoryCard;