import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (<form action="" onSubmit={() => {}}>
    <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
    <input type="password" placeholder="password" />
    <button type="submit">log in</button>
  </form>
  )
  };

export default Login;