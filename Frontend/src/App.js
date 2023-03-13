import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/api/user/login" />}
            />
            <Route
              path="/api/user/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/api/user/sign_up"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </HashRouter>
    </div>
  )
}

export default App
