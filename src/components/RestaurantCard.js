import { IMG_CDN_URL } from "../../config";
import Star from "../assets/img/star_1828884.png";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);

  const { name, cuisines, cloudinaryImageId, locality, avgRating } = resData;
  const cleanedName = name.replace(/\([^)]+\)/, "").trim();
  const truncatedCuisines = cuisines.slice(0, 4);

  return (
    <div
      data-testid="resCard"
      className="inline-block min-h-96 w-80 m-3 p-2.5 bg-white text-center rounded-2xl border border-black shadow-xl overflow-hidden transform transition-transform hover:scale-95"
    >
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        className="h-40 w-[100%] rounded-md"
        alt={name}
      />
      <h2 className="text-xl font-bold mt-4 mb-4">{cleanedName}</h2>
      <h3 className="text-lg font-medium mb-4">
        {truncatedCuisines.join(", ")}
      </h3>
      <h4 className="mb-4 text-md font-medium">{locality} </h4>
      <div className="h-5 flex flex-row items-center justify-center space-x-1">
        <img className="h-4 w-4 bg-white" src={Star} alt="Rating"></img>
        <h4 className="mb-0 text-md font-medium">{avgRating}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
