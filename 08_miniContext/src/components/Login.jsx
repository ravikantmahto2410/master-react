import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //UserContext ke ander jo values hai wo kaise fetch karunga mein  uske liye help karta hai ye useContext

    const {setUser} = useContext(UserContext)  //setUser hum yahan UserContext se le rhe hai

    const handleSubmit = (e) => {  //ye to huibaat bhejne ki 
        e.preventDefault()
        setUser({username,password})
    }



  return (
    <div>
        <h2>Login</h2>
        <input 
            type='text' 
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        <input 
            type='password' 
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login