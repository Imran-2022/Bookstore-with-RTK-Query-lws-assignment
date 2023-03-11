import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByType } from '../features/filter/filterSlice';

const HomeMenu = () => {
    const dispatch = useDispatch();
    const { byType } = useSelector(
        (state) => state.filters
    );
    const handleFilterByType = (type) => {
        dispatch(filterByType(type));
    };
    return (
        <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
                <button className={`lws-filter-btn ${byType=='all' &&  'active-filter'}`} onClick={e=>handleFilterByType('all')}>All</button>
                <button className={`lws-filter-btn ${byType=='featured' &&  'active-filter'}`} onClick={e=>handleFilterByType('featured')}>Featured</button>
            </div>
        </div>
    );
};

export default HomeMenu;