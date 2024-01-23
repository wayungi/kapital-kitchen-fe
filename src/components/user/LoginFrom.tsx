import {useState, ChangeEvent, FormEvent} from 'react'
import { userLogin } from './UserSlice'


const LoginFrom = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const isUndefinedOrBlank = [username, password].some((element) => element === '')

    const handleLogin = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (isUndefinedOrBlank ) return 
        userLogin({ username, password})
    }



  return (
    <form>
        <h1>Login From</h1>
        <div>
            <input type='text' placeholder='Username' onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} value={username}/><br />
            <input type='text' placeholder='Password' onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} value={password}/><br />
            <button type='submit' onClick={ (e) => handleLogin(e) }>Register</button>
        </div>
    </form>
  )
}

export default LoginFrom