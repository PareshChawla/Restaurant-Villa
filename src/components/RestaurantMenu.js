import { useState } from "react";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import ShimmerRestaurantMenu from "./ShimmerRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerRestaurantMenu />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="min-h-screen text-center my-6">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h2 className="font-medium text-md my-3">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h2>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            setShowIndex={() => {
              // Toggle the state explicitly based on the current showItems value
              setShowIndex((prevIndex) => (prevIndex === index ? null : index));
            }}
            showItems={index === showIndex ? true : false}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
