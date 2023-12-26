import { IMG_CDN_URL} from "../../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  locality,
  avgRating,
}) => {
  // Limit the cuisines to a maximum of 4
  const truncatedCuisines = cuisines.slice(0, 4);

  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name}</h2>
      <h3>{truncatedCuisines.join(", ")}</h3>
      <h4>{locality} </h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
