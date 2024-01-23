import { userLogout } from "./UserSlice"

const Logout = () => {

    const handleLogout = async () => {
        userLogout()
    }

    return (
        <form onSubmit={handleLogout}>
            <button type="submit">Logout</button>
        </form>
    )


}

export default Logout