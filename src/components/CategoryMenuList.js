import img from "../assets/img/offline.jpg";
import { IMG_CDN_URL } from "../../config";

const CategoryMenuList = ({ items }) => {
  console.log(items);
  return (
    <>
      {items.map((item) => (
        <div
          className="flex flex-row w-6/12 mx-auto justify-between mb-2 p-2 border-gray-200 border-b-2 relative items-center"
          key={item.card.info.id}
        >
          <div className="flex flex-col items-start text-left w-8/12">
            <h1 className="font-medium">{item.card.info.name}</h1>
            <h2 className="text-sm leading-8">
              ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </h2>
            <span className="text-sm text-gray-500">{item.card.info.description}</span>
          </div>
          <div className="relative flex-shrink-0">
            <img className="h-20 w-30 rounded-md" src={IMG_CDN_URL + item.card.info.imageId} alt="menu-img" />
            <div className="absolute inset-10 flex my-6 justify-center">
              <button className="w-24 h-6 rounded-md font-bold text-green-500 font-mono bg-white border border-gray-400 shadow-md">
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryMenuList;
