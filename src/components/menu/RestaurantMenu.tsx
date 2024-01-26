import { useAppSelector } from "../../app/hooks";
import { selectRestaurantMenu } from "../../features/menu/menuSlice";
import Menu from "./SpecificRestaurantMenu";

type RestaurantMenuProp = {
  id: string;
};

const RestaurantMenu = ({ id }: RestaurantMenuProp) => {
  const menuItems = useAppSelector((state) => selectRestaurantMenu(state, id));
  return <Menu menuItemList={menuItems} />;
};

export default RestaurantMenu;
