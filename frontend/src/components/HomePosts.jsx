
const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src="https://tse4.mm.bing.net/th?id=OIP.OyT3VyBoI6Y6-WWSA8AiOQHaEK&pid=Api&P=0&h=180" alt=""  className="h-full w-full object-cover"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      10 useful things must be in your bag while travelling 
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>@RohitAnjane</p>
       <div className="flex space-x-2">
       <p>01/01/2024</p>
       <p>16:30</p>
       </div>
      </div>
      <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus commodi deleniti architecto nobis ad sunt recusandae omnis veritatis ea, labore maiores distinctio, explicabo excepturi numquam possimus odio dignissimos id sed dolor? Odit dicta accusantium eum laboriosam in, nemo vero culpa cumque? Ipsum autem quam optio quod laudantium quae illo voluptatibus.</p>
    </div>

    </div>
  )
}

export default HomePosts