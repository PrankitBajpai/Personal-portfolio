import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="p-8">
      <h2 className="text-4xl text-center font-bold mb-12 bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400 text-transparent animate-pulse drop-shadow-lg">
        SKILLS
      </h2>

      <div className="flex space-x-5 mb-6">
        <motion.div
          className="border-4 border-white px-3 h-52 w-1/2 rounded-xl shadow-lg shadow-cyan-400/50 hover:scale-105 hover:shadow-cyan-300 transition duration-300 ease-in-out"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <h1 className="text-4xl text-center font-bold mb-12 bg-clip-text bg-gradient-to-r from-yellow-300 to-purple-500 text-transparent animate-pulse drop-shadow-lg">LANGUAGES</h1>
          <div className="flex space-x-6 justify-center">
          <img src="https://www.citypng.com/public/uploads/preview/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn.png" className="rounded-full size-17"></img>
          <img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" className="rounded-full size-17 "></img>
          <img src="https://img.icons8.com/?size=96&id=shQTXiDQiQVR&format=png" className="rounded-full size-17 "></img>
          <img src="https://icons.veryicon.com/png/o/application/designer-icon/sql-5.png" className="rounded-full size-17 "></img>
          </div>
        </motion.div>
        <motion.div
          className="border-4 border-white px-3 h-52 w-1/2 rounded-xl shadow-lg shadow-blue-400/50 hover:scale-105 hover:shadow-blue-300 transition duration-300 ease-in-out"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        <h1 className="text-4xl text-center font-bold mb-12 bg-clip-text bg-gradient-to-r from-yellow-300 to-purple-500 text-transparent animate-pulse drop-shadow-lg">FRONTEND</h1>
        <div className="flex space-x-6 justify-center">
          <img src="https://cdn0.iconfinder.com/data/icons/social-network-9/50/22-512.png" className="rounded-full size-17"></img>
          <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" className="rounded-full size-17 "></img>
          <img src="https://img.icons8.com/color/512/javascript.png" className="rounded-full size-17 "></img>
          <img src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png" className="rounded-full size-17 "></img>
          <img src="https://en.vetores.org/wp-content/uploads/vite-js-logo.png" className="rounded-full size-17 "></img>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKPw4CK4jcH7udsFHZdiB3iIOuI3fUCsxUZosXy4Y1yd25NA-dzCBPrSDIhg1BwObl3w&usqp=CAU" className="rounded-full size-17 "></img>
          </div>
        </motion.div>
      </div>

      <div className="flex space-x-5">
        <motion.div
          className="border-4 border-white px-3 h-52 w-1/2 rounded-xl shadow-lg shadow-indigo-400/50 hover:scale-105 hover:shadow-indigo-300 transition duration-300 ease-in-out"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className="text-4xl text-center font-bold mb-12 bg-clip-text bg-gradient-to-r from-yellow-300 to-purple-500 text-transparent animate-pulse drop-shadow-lg">BACKEND</h1>
          <div className="flex space-x-6 justify-center">
          <img src="https://www.desuvit.com/wp-content/uploads/2021/03/mongodb-icon.png" className="rounded-full size-17"></img>
          <img src="https://w7.pngwing.com/pngs/232/470/png-transparent-circle-js-node-node-js-programming-round-icon-popular-services-brands-vol-icon-thumbnail.png" className="rounded-full size-17 "></img>
          <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" className="rounded-full size-17 "></img>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWA3j1vFHAw02M1aWlAnhbbkmWYpF2kkDbrw&s" className="rounded-full size-17 "></img>
          </div>
          </motion.div>
        <motion.div
          className="border-4 border-white px-3 h-52 w-1/2 rounded-xl shadow-lg shadow-purple-400/50 hover:scale-105 hover:shadow-purple-300 transition duration-300 ease-in-out"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h1 className="text-4xl text-center font-bold mb-12 bg-clip-text bg-gradient-to-r from-yellow-300 to-purple-500 text-transparent animate-pulse drop-shadow-lg">TOOLS</h1>
          <div className="flex space-x-6 justify-center">
          <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" className="rounded-full size-17"></img>
          <img src="https://static-00.iconduck.com/assets.00/git-icon-icon-256x256-zrcvaen7.png" className="rounded-full size-17 "></img>
          <img src="https://static-00.iconduck.com/assets.00/colab-icon-256x256-n6shvrxk.png" className="rounded-full size-17 "></img>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPW7MCOrC8vxDWwZyduc0-gp9SyxkOcJHSEw&s" className="rounded-full size-17 "></img>
          </div>
          </motion.div>
      </div>
    </div>
  );
}

export default Skills;
