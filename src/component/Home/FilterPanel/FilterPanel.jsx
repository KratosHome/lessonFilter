import React from 'react';
import FilterListToggle from '../../common/FilterListToggle/FilterListToggle';
import { categoryList, ratingList } from "../../../constants/constants"
import "./FilterPanel.css"
import CheckboxProton from '../../common/CheckBoxProton/CheckBoxProton';
import SliderProton from '../../common/SliderProton/SliderProton';

const Filterpanel = ({
    selectedCategory,
    selectCategory,
    selectedRating,
    selectRating,
    cuisines,
    changeChecked,
    changePrice,
    selectedPrice
}) => {
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
            <div className='input-group'>
                <p className='lable'>Cuisines</p>
                {cuisines.map((cuisine) => (
                    <CheckboxProton
                        key={cuisine.id}
                        cuisine={cuisine}
                        changeChecked={changeChecked}
                    />
                ))}
            </div>
            <div className='input-group'>
                <p className='lable-range'>Cuisines</p>
                <SliderProton
                    value={selectedPrice}
                    changePrice={changePrice}

                />
            </div>
            <div className='input-group'>
                <p className='lable'>Star Reting</p>
                <FilterListToggle
                    options={ratingList}
                    value={selectedRating}
                    selectToggle={selectRating}
                />
            </div>
        </div>
    );
}

export default Filterpanel;
