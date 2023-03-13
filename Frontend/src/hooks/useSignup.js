import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(
      'https://mern-trial.herokuapp.com/api/user/sign_up',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      }
    )

    if (!response.ok) {
      const json = await response.json()
      setError(json.error)
    }

    if (response.ok) {
      const json = await response.json()
      //save user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      //update the authContext
      dispatch({ type: 'LOGIN', payload: json })
    }
    setIsLoading(false)
  }
  return { signup, isLoading, error }
}
