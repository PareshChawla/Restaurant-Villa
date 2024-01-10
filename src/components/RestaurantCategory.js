import { useState } from "react";
import Down from "../assets/img/down.png";
import Up from "../assets/img/up.png";
import CategoryMenuList from "./CategoryMenuList";
const RestaurantCategory = ({ data, showItems, setShowIndex}) => {
  

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <>
      <div
        className="flex flex-row w-6/12 ml-[25%] my-4 justify-between bg-gray-200 p-2 shadow-lg cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data?.title} ({data?.itemCards.length})
        </span>
        {showItems ? (
          <img className="h-6 w-7" src={Up} alt="up arrow" />
        ) : (
          <img className="h-6 w-6" src={Down} alt="down arrow" />
        )}
      </div>
      <div>{showItems && <CategoryMenuList items={data?.itemCards} />}</div>
    </>
  );
};

export default RestaurantCategory;
