import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import NotFoundImg from "../assets/img/notFound.jpg";
import { filterData } from "../utils/utils";
import useOnline from "../hooks/useOnline";



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
        jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setAllRestaurants(apiRestaurants);
      setFilteredRestaurants(apiRestaurants);
      // console.log(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants[5].info)
      // console.log(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  const isOnline = useOnline();

  if(!isOnline) {
    return (
      <div className="h-[70vh] text-center items-center mt-4 text-3xl font-bold">
       <h1>No internet connection!!</h1>
      </div>
    )
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
      <div className="flex justify-center items-center">
        <input
          type="text"
          className='m-5 border-black border-2 rounded-lg text-center focus:bg-blue-100'
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
        <button className="bg-[#DEB887] border-2 border-black  rounded-lg h-6 w-14 hover:bg-black hover:text-red-50 text-sm" onClick={handleSearch}>Search</button>
      </div>

      {noResults ? (
        <div className="flex flex-col text-center items-center">
          <h1 className="text-2xl font-bold">No such restaurant found!!</h1>
          <img className="h-80 w-80" src={NotFoundImg} alt="no-restaurant" />
        </div>
        

      ) : (
        <>
        <div className="bg-[#9EB384] h-[5vh]">
         <h1 className="font-bold text-2xl ml-4 mb-4">Top restaurant chains</h1>
        </div>
        <div className="flex flex-wrap bg-[#9EB384]">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} 
            />
          ))}
        </div>
        </>
      )}
    </>
  );
};

export default Body;
