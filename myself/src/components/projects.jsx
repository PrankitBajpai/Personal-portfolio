import { motion } from "framer-motion";

function Project(props) {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold mb-12 bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400 text-transparent animate-pulse drop-shadow-lg my-20">
        PROJECT-{props.n}
      </h1>

      <motion.div
        className="border-4 border-white px-3 mx-7 my-7 h-auto rounded-xl shadow-lg shadow-purple-400/50 hover:scale-103 hover:shadow-purple-300 transition duration-300 ease-in-out"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h1 className="text-4xl text-center font-bold bg-clip-text bg-gradient-to-r from-yellow-300 to-purple-500 text-transparent animate-pulse drop-shadow-lg">
          {props.name}
        </h1>

        <div className="flex my-1">
          <div className="overflow-hidden w-64 h-52 rounded-2xl">
            <img
              src={props.im}
              alt="WAY TO HEALTH"
              className="w-full h-full object-cover"
            />
            
          </div>
        <div className="flex-col">
          <h1 className="text-white font-bold text-3xl justify-center mx-12 ">FEATURES</h1>
          <ul className="list-disc list-inside space-y-1  text-white  text-2xl font-normal mx-10 my-5 ">
         <li>{props.f1}</li> 
         <li>{props.f2}</li>
         <li>{props.f3}</li>
         <li>{props.f4}</li>
         <li >{props.f5} {props.e}</li>
        </ul>
        </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Project;
