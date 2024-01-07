import useRestaurantMenu from "../hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    
    const { resId } = useParams();
    console.log(resId);

    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo);

    if (resInfo===null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card?.card);

    const cardData = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card?.card;

    let itemCards;
    if (cardData?.itemCards) {
        // Use the first path
        itemCards = cardData.itemCards;
    } else if (cardData?.categories && cardData.categories[0]?.itemCards) {
        // Use the second path
        itemCards = cardData.categories[0].itemCards;
    } else {
        // Handle the case where neither path is present
        itemCards = [];
    }

    return (
        <>
            <div className="min-h-screen">
                <h1>{name}</h1>
                <h2>{cuisines.join(",")}</h2>
                <h3>{costForTwoMessage}</h3>
                <ul>
                    {itemCards.map((item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name}- {"Rs."}{item.card.info.price/100 || item.card.info.defaultPrice/100}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default RestaurantMenu;
