import {useState, ChangeEvent, FormEvent} from 'react'
import { userRegister } from './UserSlice'


const RegisterFrom = () => {

    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [contact, setContact] =  useState<string>('')

    const isUndefinedOrBlank = [email, username, password, contact].some((element) => element === '')

    const handleRegister = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log("handling registration")
        if (isUndefinedOrBlank ) return 
        userRegister({ email, username, password, contact })
    }



  return (
    <form>
        <h1>RegisterFrom</h1>
        <div>
            <input type='text' placeholder='Email' onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} value={email}/><br />
            <input type='text' placeholder='Username' onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} value={username}/><br />
            <input type='text' placeholder='Contact' onChange={(e: ChangeEvent<HTMLInputElement>) => setContact(e.target.value)} value={contact}/><br />
            <input type='text' placeholder='Password' onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} value={password}/><br />
            <input type='text' placeholder='Confirm Password' onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} value={confirmPassword} /><br />
            <button type='submit' onClick={ (e) => handleRegister(e) }>Register</button>
        </div>
    </form>
  )
}

export default RegisterFrom