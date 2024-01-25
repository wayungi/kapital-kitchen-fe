import { useState, FormEvent } from "react";
import { useParams } from "react-router-dom";
import { MenuItemType } from "../../custom";
import { updateMenuItem , selectMenuItem} from "../../features/menu/menuSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const EditMenu = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch()
  const selectedMenuItem = useAppSelector((state) => selectMenuItem(state, id as string))
  const [menuItem, setMenuItem] = useState<MenuItemType>({...selectedMenuItem as MenuItemType});

  const canSave = Object.values(menuItem).every(
    (value) => value !== "" && menuItem.price !== 0
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSave) return;
    dispatch(updateMenuItem(menuItem));
  };

  return (
    <section>
      <h1>Update menu Item</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <img src={menuItem.path} alt="image preview" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={menuItem.name}
            onChange={(e) =>
              setMenuItem({ ...menuItem, [e.target.name]: e.target.value })
            }
          />

          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            value={menuItem.price}
            onChange={(e) =>
              setMenuItem({ ...menuItem, [e.target.name]: e.target.value })
            }
          />

          <textarea
            placeholder="Offer brief description (90 characters) ..."
            value={menuItem.desc}
            name="desc"
            onChange={(e) => setMenuItem({...menuItem, [e.target.name]: e.target.value})}
            rows={3}
            cols={30}
          />

          <div>
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default EditMenu