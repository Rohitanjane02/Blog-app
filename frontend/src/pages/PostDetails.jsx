import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import Comment from "../components/Comment"

const PostDetails = () => {
  return (
    <div>
      <Navbar/>
      <div className="px-8 md:px-[200px] mt-8">

        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">10 useful things must be in your bag while travelling </h1>
          <div className="flex items-center justify-center space-x-2">
            <p><BiEdit/></p>
            <p><MdDelete/></p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@RohitAnjane</p>
          <div className="flex space-x-2">
            <p>01/01/2024</p>
            <p>16:30</p>
          </div>
        </div>
          <img src="https://tse4.mm.bing.net/th?id=OIP.OyT3VyBoI6Y6-WWSA8AiOQHaEK&pid=Api&P=0&h=180" className="w-full mx-auto mt-8" alt="" />
          <p className="mx-auto mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae quibusdam magni fugit perspiciatis labore error non, quas placeat incidunt voluptatibus! Ipsa velit qui nisi soluta, reprehenderit accusantium recusandae hic quasi a architecto autem. Magnam voluptas vero, illum hic quia quam reiciendis aut, rem saepe, doloribus provident sapiente ad. A?</p>
          <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories:</p>
            <div className="flex justify-center items-center space-x-2">
              <div className="bg-gray-300 rounded-lg px-3 py-1">Country</div>
              <div className="bg-gray-300 rounded-lg px-3 py-1">Location</div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
            {/* Comments */}
            <Comment/>
            <Comment/>
          </div>
          {/* write a comment */}
          <div className="w-full flex flex-col mt-4 md:flex-row">
              <input type="text" placeholder="write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0" />
              <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add comment</button>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default PostDetails