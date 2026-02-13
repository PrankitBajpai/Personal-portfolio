function Hero(){
    return(
    <div>
    <div className="text-white text-center py-16 text-center">
        <img src="https://img.freepik.com/premium-photo/young-anime-boy-focused-coding-laptop_1282444-262369.jpg" className="mx-auto mb-8 w-48 h-48 rounded-full transform transition-transform duration-300 hover:scale-105 object-cover"></img>
        <h1 className="text-4xl font-bold">
          Iam{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">PRANKIT BAJPAI</span>
        </h1>
        <p className="mt-4 text-large text-gray-300 text-2xl ">Specailizing in field of AI and ML passionate about Data Science </p>
        <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-blue-400 to-yellow-200 text-black rounded-full text-2xl  hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2" >RESUME</button>
        <button className="bg-gradient-to-r from-blue-400 to-yellow-200 text-black rounded-full text-2xl  hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2">CONNECT WITH ME</button>
        </div>
        
    </div>
</div>
    )
}
export default Hero







   