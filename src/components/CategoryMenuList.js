import { IMG_CDN_URL } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const CategoryMenuList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const isItemInCart = (itemId) => {
    return cartItems.some((cartItem) => cartItem.card.info.id === itemId);
  };

  const handleButtonClick = (item) => {
    if (isItemInCart(item.card.info.id)) {
      // If item is already in cart, dispatch REMOVE action
      dispatch(removeItem(item.card.info.id));
    } else {
      // If item is not in cart, dispatch ADD action
      dispatch(addItem(item));
    }
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="flex flex-row w-6/12 mx-auto justify-between p-3 border-gray-200 border-b-2 relative items-center"
          key={item?.card?.info?.id}
        >
          <div className="flex flex-col items-start text-left w-8/12">
            <h1 className="font-medium">{item?.card?.info?.name}</h1>
            <h2 className="text-sm leading-8">
              ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
            </h2>
            <span className="text-sm text-gray-500">
              {item?.card?.info?.description}
            </span>
          </div>
          <div className="relative flex-shrink-0">
            <img
              className="h-20 w-30 rounded-md"
              src={IMG_CDN_URL + item?.card?.info?.imageId}
              alt="menu-img"
            />
            <div className="absolute inset-10 flex my-6 justify-center">
              <button
                className="w-24 h-6 p-2 text-center flex items-center rounded-md font-bold text-green-500 font-mono bg-white border border-gray-400 hover:shadow-lg"
                onClick={() => handleButtonClick(item)}
              >
                {isItemInCart(item.card.info.id) ? "REMOVE" : "ADD"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryMenuList;
