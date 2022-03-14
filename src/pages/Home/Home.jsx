import React, { useEffect, useState } from "react";
import EmptyView from "../../component/common/EmptyView/EmptyView";
import Filterpanel from "../../component/Home/FilterPanel/FilterPanel";
import List from "../../component/Home/List/List";
import SearchBear from "../../component/Home/SerchBar/SearchBear";
import { dataList } from "../../constants/constants";
import './Home.css'

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedRating, setSelectedRating] = useState(null)
    const [selectedPrice, setSelectedPrice] = useState([1000, 5000])

    const [inputSearch, setInputSearch] = useState("")

    const [resultFound, setResultFound] = useState(false)

    const [cuisines, setCuisines] = useState([
        { id: 1, checked: false, label: 'American' },
        { id: 2, checked: false, label: 'Chinese' },
        { id: 3, checked: false, label: 'Italian' },
    ]);
    const [list, setList] = useState(dataList)

    const handleSelectCategory = (event, value) =>
        !value ? null : setSelectedCategory(value)

    const handleSelectRating = (event, value) =>
        !value ? null : setSelectedRating(value)

    const handleChangeChecked = id => {
        const cuisinesStateList = cuisines
        const changeCheckedCuisines = cuisinesStateList.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        )
        setCuisines(changeCheckedCuisines)
    }

    const handleChangePrice = (event, value) => {
        setSelectedPrice(value)
    }

    const applyFilters = () => {
        let updateList = dataList;

        // Reting Filter 
        if (selectedRating) {
            updateList = updateList.filter(
                (item) => parseInt(item.rating) === parseInt(selectedRating)
            );
        }

        // Categori Filter 
        if (selectedCategory) {
            updateList = updateList.filter(
                (item) => item.category === selectedCategory
            );
        }

        // cusine filter
        const cuisinesChecked = cuisines
            .filter((item) => item.checked)
            .map((item) => item.label.toLowerCase());

        if (cuisinesChecked.length) {
            updateList = updateList.filter((item) =>
                cuisinesChecked.includes(item.cuisine)
            );
        }

        // Price filter
        const minPrice = selectedPrice[0]
        const maxPrice = selectedPrice[1]

        updateList = updateList.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
        )

        // search filter
        if (inputSearch) {
            updateList = updateList.filter((item) =>
                item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1
            )
        }


        setList(updateList)

        !updateList.length ? setResultFound(false) : setResultFound(true)
    }

    useEffect(() => {
        applyFilters()
    }, [
        applyFilters,
        selectedRating,
        selectedCategory,
        cuisines,
        selectedPrice,
        selectedPrice,
        inputSearch
    ]);

    return (
        <div className="home">
            <SearchBear
                value={inputSearch}
                changeInput={e => setInputSearch(e.target.value)}
            />
            <div className="home_panelList-wrap">
                <div className="home_pane-wrap">
                    <Filterpanel
                        selectedCategory={selectedCategory}
                        selectCategory={handleSelectCategory}
                        selectedRating={selectedRating}
                        selectedPrice={selectedPrice}
                        selectRating={handleSelectRating}
                        cuisines={cuisines}
                        changeChecked={handleChangeChecked}
                        changePrice={handleChangePrice}
                    />
                </div>
                <div className="home-list-wrap">
                   {resultFound ? <List list={list} /> : <EmptyView />}
                </div>
            </div>
        </div>
    )
}

export default Home;