


const NewRestaurant = () => {


    return (
        <>
            <form 
                className="
                bg-black  
                rounded-lg
                max-w-96
                mx-auto
                my-10
                md:flex
                md:max-w-fit

                border-2
                border-green-600
                border-solid
                ">

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

                <div className="
                    space-y-5 
                    px-6 
                    py-4
                    h-80
                    text-gray-300 
                    max-w-96
                    md:w-96
                    ">

                    <h1 className="text-gray-300 text-center">Restaurant registration</h1>

                    <div>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="Name" 
                            className="bg-black border-b-2 border-gray-400 w-full outline-none"/>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            id="location" 
                            placeholder="Location"
                            className="bg-black border-b-2 border-gray-400 w-full outline-none"/>
                    </div>
                    <div>
                        <input 
                            type="file" 
                            id="image" 
                            placeholder="Upload file" 
                            className="bg-black border-b-2 border-gray-400 w-full outline-none"/>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            id="contact" 
                            placeholder="Official contact"
                            className="bg-black border-b-2 border-gray-400 w-full outline-none"/>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Submit"
                            className="bg-green-600 w-full h-10 rounded-full" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default NewRestaurant
