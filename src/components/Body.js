import ResList from "../utils/mockData.js";
import RestaurentCard from "./RestaurentCard.js";
import { useState } from "react"; 


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(ResList);        
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(restaurant => restaurant?.card?.card?.info?.avgRating > 4 );
                    setListOfRestaurants(filteredList);
                }}
                >
                Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant)=>(<RestaurentCard key={restaurant?.card?.card?.info?.id} resData={restaurant}/>))};
            </div>
            
        </div>
    );
};

export default Body;