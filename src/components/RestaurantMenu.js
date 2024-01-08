import useRestaurantMenu from "../hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);


  return (
    <>
      <div className="min-h-screen text-center my-4 ">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h2 className="font-medium text-md my-3">{cuisines.join(", ")} - {costForTwoMessage}</h2>
        {categories.map((category) => (
          <RestaurantCategory data={category?.card?.card} key={category?.card?.card?.title} />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
