import { useLogin } from '../hooks/useLogin'

import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }
  return (
    <form action="" className="login" onSubmit={handleSubmit}>
      <h3>Log in</h3>
      <label htmlFor="">Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label htmlFor="">Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Log in </button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}
export default Login
