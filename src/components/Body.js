
import RestaurantCard from "./RestaurantCard.js";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js"; 


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

   
   
     
    useEffect(() =>{
        fetchData();
    },[]);
    
    const fetchData = async () =>{
        const Data = await fetch(
            "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.5678651&lng=77.6750869&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await Data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    };
    //Conditional Rendering
    //if(listOfRestaurants.length === 0){
    //  return <Shimmer/>;
    //}

       
    
//conditional rendering using ternary operator
    return listOfRestaurants.length === 0 ?(<Shimmer/>)  : (
        <div className="body">
            <div className="filter">
                <div className="search-container">
                    <input type="text" className="search-box" placeholder="Search for restaurants"
                     value={searchText} 
                     onChange={(e) => setSearchText(e.target.value)}/>
                     <button className="search-btn" onClick={() => 
                     {
                        const filteredList = listOfRestaurants.filter((restaurant) => 
                            restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredList);
                     }}>Search</button>
                </div>
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter((restaurant )=> restaurant?.info?.avgRating > 4 );
                    setFilteredRestaurants(filteredList);//setListOfRestaurants(filteredList)
                }}
                >
                Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
                ))}
            </div>
            
        </div>
    );
};

export default Body;