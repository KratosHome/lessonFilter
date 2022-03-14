import React, { useState } from "react";
import Filterpanel from "../../component/Home/FilterPanel/FilterPanel";
import List from "../../component/Home/List/List";
import SearchBear from "../../component/Home/SerchBar/SearchBear";
import './Home.css'

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedRating, setSelectedRating] = useState(null)
    const [cusines, setCusines] = useState([
        {
            id: 1,
            checked: false,
            label: "American",
        },
        {
            id: 2,
            checked: false,
            label: "Chinese",
        },
        {
            id: 3,
            checked: false,
            label: "Italian",
        }
    ])

    const handelSelecktCategory = (event, value) =>
        !value ? null : setSelectedCategory(value)

    const handelSelecktRating = (event, value) =>
        !value ? null : setSelectedRating(value)

    const handleChangeChecked = id => {
        const cuisinesStateList = cusines
        const changeCheckedCuisines = cuisinesStateList.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        )
        setCusines(changeCheckedCuisines)
    }

    return (
        <div className="home">
            <SearchBear />
            <div className="home_panelList-wrap">
                <div className="home_pane-wrap">
                    <Filterpanel
                        selectToggle={handelSelecktCategory}
                        selectedCategory={selectedCategory}
                        selectReting={handelSelecktRating}
                        selectedRating={selectedRating}
                        cusines={cusines}
                        changeChecked={handleChangeChecked}
                    />
                </div>
                <div className="home-list-wrap">
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Home;