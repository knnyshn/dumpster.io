import { useState } from "react"
import signUp from '../api/user'

export default function SignIn() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [password2, setPassword2] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await signUp(username, email, password, password2)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="username">Username: </label> */}
        <input
          type="text"
          id="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        {/* <label htmlFor="email">E-mail: </label> */}
        <input
          type="email"
          id="email-address"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        {/* <label htmlFor="password">Password: </label> */}
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        {/* <label htmlFor="password-confirm">Confirm Password: </label> */}
        <input
          type="password"
          id="password-confirm"
          placeholder="Confirm Password"
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
        <br />
        <input type="submit" id="submit" value="Sign In" />
      </form>
    </>
  )
}