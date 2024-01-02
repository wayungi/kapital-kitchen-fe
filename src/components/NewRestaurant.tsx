import {ChangeEvent, FormEvent, MouseEvent, useState} from 'react'
import { useAppDispatch } from '../app/hooks'
import { addRestaurant } from '../features/restaurants/restaurantSlice'
import { v4 as uuidv4 } from 'uuid';


const NewRestaurant = () => {
    const dispatch =  useAppDispatch()

    const [name, setName] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [path, setPath] = useState<string>('')
    const [contact, setContact] =  useState<string>('')
    const isSubmitable = [name,location, path, contact].every((element) => element !== '')

    const processForm = (e:FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const newRestaurant  =  {
            id: uuidv4(),
            name,
            location,
            status: 'down',
            path: 'https://picsum.photos/200'
            // contact
        }

        console.log(newRestaurant)

        dispatch(addRestaurant(newRestaurant))
        setName('')
        setLocation('')
        setPath('')
        setContact('')



    }

    return (
        <div className="flex h-full items-center">
            <form className="bg-black rounded-lg max-w-96 mx-auto my-10 h-max md:flex md:max-w-fit" onSubmit={processForm}>
                <div className="h-80 md:w-96 md:h-96">
                    <img 
                        src="https://picsum.photos/200" 
                        alt="restaurant" 
                        className="
                            w-full 
                            h-full 
                            object-cover 
                            rounded-t-lg 
                            md:rounded-s-lg md:rounded-e-none"/>
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
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            id="location" 
                            placeholder="Location"
                            className="bg-black border-b-2 border-gray-400 w-full outline-none"
                            value={location}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}/>
                    </div>
                    <div>
                        <input 
                            type="file" 
                            id="image" 
                            placeholder="Upload file" 
                            className="bg-black border-b-2 border-gray-400 w-full outline-none"
                            value={path}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setPath(e.target.value)}/>

                    </div>
                    <div>
                        <input 
                            type="text" 
                            id="contact" 
                            placeholder="Contact"
                            className="bg-black border-b-2 border-gray-400 w-full outline-none"
                            value={contact}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setContact(e.target.value)}/>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Submit"
                            className="bg-green-600 w-full h-10 rounded-full"
                            disabled={!isSubmitable}
                            style={isSubmitable ? {cursor: 'pointer'} : {cursor:'none'}}

                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewRestaurant
