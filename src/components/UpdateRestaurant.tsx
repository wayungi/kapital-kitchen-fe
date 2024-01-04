import { useState, ChangeEvent } from 'react'
import { useAppSelector } from "../app/hooks"
import { selectRestaurantById } from '../features/restaurants/restaurantSlice'

type Updateprops = {
    id: string
}

const UpdateRestaurant = ({ id }: Updateprops) => {
  const {name, location, contact, path} =  useAppSelector((state) => selectRestaurantById(state, id))
  const [contactEdit, setContact] = useState<string>(contact)
  const [pathEdit, setPath] = useState<string | undefined>(path)
  const [locationEdit, setLocation] = useState<string>(location)
  const [nameEdit, setName] = useState<string>(name)

  const handleImageUpload = () => {
    console.log('handle image upload')
  }

  const handleFormSubmit = () => {
    console.log('form submitted')
  }


  return (
    <div className="flex h-full items-center">
            <form className="bg-black rounded-lg max-w-96 mx-auto my-10 h-max md:flex md:max-w-fit" onSubmit={ handleFormSubmit }>
                <div className="h-80 md:w-96 md:h-96">
                    { <img 
                        src={pathEdit} 
                        alt="restaurant" 
                        className="w-full h-full object-cover rounded-t-lg md:rounded-s-lg md:rounded-e-none"/>  || <ImagePreview 
                    />}
                </div>
                <div className="space-y-5 px-6 py-4 h-80 text-gray-300 max-w-96 md:w-96">
                    <h1 className="text-gray-300 text-center">Restaurant registration</h1>
                    <div>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="Name" 
                            className="bg-black border-b-2 border-gray-400 w-full outline-none"
                            value={nameEdit}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            id="location" 
                            placeholder="Location"
                            className="bg-black border-b-2 border-gray-400 w-full outline-none"
                            value={locationEdit}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}/>
                    </div>
                    <div>
                        <input 
                            type="file" 
                            id="image" 
                            placeholder="Upload file" 
                            className="bg-black border-b-2 border-gray-400 w-full outline-none"
                            // value={pathEdit}
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
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setContact(e.target.value)}/>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Submit"
                            className="bg-green-600 w-full h-10 rounded-full"
                            // disabled={!isSubmitable}
                            // style={isSubmitable ? {cursor: 'pointer'} : {cursor:'none'}}

                        />
                    </div>
                </div>
            </form>
        </div>
  )
}

export default UpdateRestaurant