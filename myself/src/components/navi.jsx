function Nava() {
  return (
    <>
    <nav className="bg-black  text-white px-8 md:px-16 lg:px-24">
   
    <div className="text-3xl container justify-center py-2 flex md:justify-between items-center">
    <h1 className="hidden md:inline text-4xl font-bold  text-white neon-text-violet">PORTFOLIO</h1>

     <div className="space-x-12">
      <a href="#" className=" text-shadow-gray-800 hover:text-cyan-400">ABOUT</a>
      <a href="#" className=" text-shadow-gray-800 hover:text-cyan-400">SKILLS</a>
      <a href="#" className=" text-shadow-gray-800 hover:text-cyan-400">PROJECTS</a>
      </div>
      <button className="bg-gradient-to-r from-violet-500 to-blue-400 text-white rounded-full text-2xl  hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2">CONTACT ME</button>
     </div>
    </nav>
    
    </>
  )
}

export default Nava