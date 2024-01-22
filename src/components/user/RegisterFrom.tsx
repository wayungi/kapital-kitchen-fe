import {useState, ChangeEvent} from 'react'



const RegisterFrom = () => {

    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const handleRegister = () => {
        if(email === "" || username === "" || password === "") return 
        
        const newUser = { email, username, password }

    }



  return (
    <form>
        <h1>RegisterFrom</h1>
        <div>
            <input type='text' placeholder='Email' onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} value={email}/>
            <input type='text' placeholder='Username' onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} value={username}/>
            <input type='text' placeholder='Password' onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} value={password}/>
            <input type='text' placeholder='Confirm Password' onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} value={confirmPassword} />
            <button type='submit' onClick={handleRegister}>Register</button>
        </div>
    </form>
  )
}

export default RegisterFrom