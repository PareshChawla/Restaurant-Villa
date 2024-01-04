import { IMG_CDN_URL} from "../../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  locality,
  avgRating,
}) => {
  const cleanedName = name.replace(/\([^)]+\)/, "").trim();
  // Limit the cuisines to a maximum of 4
  const truncatedCuisines = cuisines.slice(0, 4);

  return (
    <div className='inline-block h-[440px] w-80 m-3 p-2.5 bg-white text-center rounded-2xl border border-black shadow-xl'>
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2 className="text-2xl font-bold mt-4 mb-4">{cleanedName}</h2>
      <h3 className="text-lg font-medium mb-4">{truncatedCuisines.join(", ")}</h3>
      <h4 className='mb-4 font-medium'>{locality} </h4>
      <h4 className='mb-0 font-medium'>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
