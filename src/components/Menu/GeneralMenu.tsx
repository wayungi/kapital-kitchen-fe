import { useAppSelector } from "../../app/hooks";
import { selectAllMenuItems } from "../../features/menu/menuSlice";
import Menu from "./SpecificRestaurantMenu";

const GeneralMenu = () => {
  const menuItemList = useAppSelector((state) => selectAllMenuItems(state));
  return <Menu menuItemList={menuItemList} />;
};

export default GeneralMenu;
