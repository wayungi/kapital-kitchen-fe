import { useState, useMemo, ChangeEvent, FormEvent, MouseEvent } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectRestaurantById } from "../features/restaurants/restaurantSlice";
import { updateRestaurant } from "../features/restaurants/restaurantSlice";
import ImagePreview from "./partials/ImagePreview";
 import { RestaurantType } from "../custom";

const UpdateRestaurant = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const selectedRestaurant: RestaurantType | undefined = useAppSelector((state) => selectRestaurantById(state, id as string));

  const { _id, name, location, contact, path, active } = selectedRestaurant;

  const [contactEdit, setContact] = useState<string>(contact);
  const [file, setFile] = useState<undefined | File>();
  const [locationEdit, setLocation] = useState<string>(location);
  const [nameEdit, setName] = useState<string>(name);
  const [localPath, setLocalPath] = useState<string>("");

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]); // displays the live uploaded image
  };


  const handleSaveEdit = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newRestaurant = {
      _id,
      name: nameEdit,
      location: locationEdit,
      active,
      path,
      contact: contactEdit,
    };
    dispatch(updateRestaurant(newRestaurant));
  };

  return (
    <div className="flex h-full items-center">
      <form className="bg-black rounded-lg max-w-96 mx-auto my-10 h-max md:flex md:max-w-fit">
        <div className="h-80 md:w-96 md:h-96">
          {(file && (
            <img
              src={URL.createObjectURL(file)}
              alt="restaurant"
              className="w-full h-full object-cover rounded-t-lg md:rounded-s-lg md:rounded-e-none"
            />
          )) || (
              <img
                src={path}
                alt="restaurant"
                className="w-full h-full object-cover rounded-t-lg md:rounded-s-lg md:rounded-e-none"
              />
            ) || <ImagePreview />}
        </div>
        <div className="space-y-5 px-6 py-4 h-80 text-gray-300 max-w-96 md:w-96">
          <h1 className="text-gray-300 text-center">Update Restaurant</h1>
          <div>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="bg-black border-b-2 border-gray-400 w-full outline-none"
              value={nameEdit}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </div>
          <div>
            <input
              type="text"
              id="location"
              placeholder="Location"
              className="bg-black border-b-2 border-gray-400 w-full outline-none"
              value={locationEdit}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLocation(e.target.value)
              }
            />
          </div>
          <div>
            <input
              type="file"
              id="image"
              placeholder="Upload file"
              className="bg-black border-b-2 border-gray-400 w-full outline-none"
              value={localPath}
              onChange={handleImageUpload}
            />
          </div>
          <div>
            <input
              type="text"
              id="contact"
              placeholder="Contact"
              className="bg-black border-b-2 border-gray-400 w-full outline-none"
              value={contactEdit}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setContact(e.target.value)
              }
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              className="bg-green-600 w-full h-10 rounded-full"
              onClick ={(e) => handleSaveEdit(e)}
              // disabled={!isSubmitable}
              // style={isSubmitable ? {cursor: 'pointer'} : {cursor:'none'}}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
