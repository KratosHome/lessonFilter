import React, { useState } from "react";
import Filterpanel from "../../component/Home/FilterPanel/FilterPanel";
import List from "../../component/Home/List/List";
import SearchBear from "../../component/Home/SerchBar/SearchBear";
import './Home.css'

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)

    const handelSelecktCategory = (event, value) => 
        !value ? null : setSelectedCategory(value)
    

    return (
        <div className="home">
            <SearchBear />
            <div className="home_panelList-wrap">
                <div className="home_pane-wrap">
                    <Filterpanel
                        selectToggle={handelSelecktCategory}
                        selectedCategory={selectedCategory}
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