import {Route, Routes} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Home from "./pages/Home"
import Login from "./pages/Login"
import PostDetails from './pages/PostDetails'
import Profile from './pages/Profile'
import Register from "./pages/Register"

// 1:18:00 hour
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/write" element={<CreatePost/>}/>
        <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
        <Route exact path="/edit/:id" element={<EditPost/>}/>
        <Route exact path="/profile/:id" element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App