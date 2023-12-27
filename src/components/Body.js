// Body component
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import NotFoundImg from "../assets/img/notFound.jpg";

const filterData = (searchInput, restaurants) => {
  const data = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return data;
};

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const[allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    // API Call
    getRestaurants();
  }, []); // Ensure useEffect runs only once on component mount

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await response.json();
      const apiRestaurants =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setAllRestaurants(apiRestaurants);
      setFilteredRestaurants(apiRestaurants);
      // console.log(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants[5].info)
      console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  const handleSearch = () => {
    const data = filterData(searchInput, allRestaurants);

    if (data.length === 0) {
      // No matching restaurants found
      setNoResults(true);
      // Reset to the original list
      // setRestaurants(allRestaurants); // Use restaurantList instead
    } else {
      // Display matching restaurants
      setNoResults(false);
      setFilteredRestaurants(data);
    }
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleSearch();
    }
  }

 
  return (allRestaurants.length===0)?(<Shimmer />):(
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "") {
              // If search input is empty, reset to the original list
              setAllRestaurants(allRestaurants);
              setNoResults(false);
            }
            setSearchInput(val);
          }}
          onKeyDown={handleKeyPress}
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>

      {noResults ? (
        <div className="no-restaurant">
          <h1>No such restaurant found.</h1>
          <img src={NotFoundImg} alt="no-restaurant" />
        </div>
        

      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
