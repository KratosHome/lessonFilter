import React from 'react';
import FilterListToggle from '../../common/FilterListToggle/FilterListToggle';
import { categoryList } from "../../../constants/constants"
import "./FilterPanel.css"

const Filterpanel = ({ selectedCategory, selectCategory }) => {
    return (
        <div>
            <div className='input-group'>
                <p className='lable'>Categoi</p>
                <FilterListToggle
                    options={categoryList}
                    value={selectedCategory}
                    selectToggle={selectCategory}
                />
            </div>
        </div>
    );
}

export default Filterpanel;
