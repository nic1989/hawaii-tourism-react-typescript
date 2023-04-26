import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getActivityType } from '../../services/httpservices';
import { setActivities } from '../../redux/actions/ActivityActions';
import ActivityCard from './ActivityCard';

const Activities: FC<{}> = () => {
    const dispatch = useDispatch();
    const params: any = useParams();
    useEffect(() => {
        (async () => {
            const response = await getActivityType(params.activity)
            dispatch(setActivities(response));
        })();
    }, [params])
    return (
        <>
            <ActivityCard />
        </>
    )
}

export default Activities;