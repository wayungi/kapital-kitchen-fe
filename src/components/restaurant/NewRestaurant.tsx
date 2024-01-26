import { ChangeEvent, MouseEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addRestaurant } from "../../features/restaurants/restaurantSlice";
import ImagePreview from "../partials/ImagePreview";

const NewRestaurant = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [path, setPath] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [file, setFile] = useState<File | undefined>();
  const [addRestaurantStatus, setAddRestaurantStatus] = useState("idle");

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]); // displays the live uploaded image
  };

  const canSave =
    [name, location, /*path,*/ contact].every(Boolean) &&
    addRestaurantStatus === "idle";
  const onSubmitBtnClicked = async (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (canSave) {
      try {
        setAddRestaurantStatus("pending");
        await dispatch(
          addRestaurant({
            name,
            location,
            path: "https://picsum.photos/200",
            contact,
          })
        );
        setName("");
        setLocation("");
        setPath("");
        setContact("");
      } catch (err) {
        console.error("Failed to save the post: ", err);
      } finally {
        setAddRestaurantStatus("idle");
      }
    }
  };

  return (
    <div className="flex h-full items-center">
      <form
        className="bg-black rounded-lg max-w-96 mx-auto my-10 h-max md:flex md:max-w-fit" /*onSubmit={processForm}*/
      >
        <div className="h-80 md:w-96 md:h-96">
          {(file && (
            <img
              src={URL.createObjectURL(file)}
              alt="restaurant"
              className="w-full h-full object-cover rounded-t-lg md:rounded-s-lg md:rounded-e-none"
            />
          )) || <ImagePreview />}
        </div>
        <div className="space-y-5 px-6 py-4 h-80 text-gray-300 max-w-96 md:w-96">
          <h1 className="text-gray-300 text-center">Restaurant registration</h1>
          <div>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="bg-black border-b-2 border-gray-400 w-full outline-none"
              value={name}
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
              value={location}
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
              value={path}
              onChange={handleImageUpload}
            />
          </div>
          <div>
            <input
              type="text"
              id="contact"
              placeholder="Contact"
              className="bg-black border-b-2 border-gray-400 w-full outline-none"
              value={contact}
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
              disabled={!canSave}
              style={canSave ? { cursor: "pointer" } : { cursor: "cursor" }}
              onClick={(e: MouseEvent<HTMLInputElement>) =>
                onSubmitBtnClicked(e)
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewRestaurant;
