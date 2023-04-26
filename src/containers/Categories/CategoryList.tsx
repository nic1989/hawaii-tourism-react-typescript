import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../../redux/actions/CategoryActions';
import { getCategoriesData } from '../../services/httpservices';
import CategoryCard from './CategoryCard';
import TravelGuide from '../TravelGuide';

const CategoryList: FC<{}> = () => {
    const dispatch = useDispatch();
    const categoryDataList: any = useSelector(state => state);
    useEffect(() => {
        if (categoryDataList && categoryDataList.categoryList.length === 0) {
            (async () => {
                const result = await getCategoriesData();
                dispatch(setCategories(result))
            })()
        }
    }, []);
    return (
        <div className="category-bg mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-6">
                        <h4 className="mt-3">Categories</h4>
                        <CategoryCard />
                    </div>
                    <div className="col-md-6 col-xs-6">
                        <h4 className="mt-3">Travel Guide</h4>
                        <TravelGuide />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryList;