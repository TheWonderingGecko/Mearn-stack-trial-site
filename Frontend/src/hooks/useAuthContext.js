import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw Error(
      'Error useAuthcontext can not be used outside of AuthContext provider'
    )
  }

  return context
}
