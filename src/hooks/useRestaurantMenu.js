import { useEffect, useState } from "react";
import { MENU_API } from "../../config";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const jsonData = await data.json();
      setResInfo(jsonData?.data);
    } catch (error) {
      console.log("Error fetching menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
