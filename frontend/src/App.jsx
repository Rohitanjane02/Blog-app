import {Route, Routes} from 'react-router-dom'
import { UserContext, UserContextProvider } from './context/UserContext'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Home from "./pages/Home"
import Login from "./pages/Login"
import PostDetails from './pages/PostDetails'
import Profile from './pages/Profile'
import Register from "./pages/Register"

// 3:09:00 hour
// 1:55->password encryption and jwt token
//3:17 i am not getting the cookie in application
const App = () => {
  return (
      <UserContextProvider>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/write" element={<CreatePost/>}/>
          <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
          <Route exact path="/edit/:id" element={<EditPost/>}/>
          <Route exact path="/profile/:id" element={<Profile/>}/>
        </Routes>
      </UserContextProvider>  
  )
}

export default App