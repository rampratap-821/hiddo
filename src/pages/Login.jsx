


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import DarTechnology from "../assets/image/image-removebg-preview.png";
// import { MdEmail } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     navigate("/dashboard");
//   };

//   return (
//     <div className="bg-gradient-to-br from-green-700 to-green-900 flex justify-center items-center min-h-screen p-4">
//       <div className="w-full max-w-md">
//         <form
//           onSubmit={handleLogin}
//           className="bg-black border border-white/20 p-6 rounded-3xl shadow-2xl w-full"
//         >
//           <div className="flex justify-center mb-6">
//             <img 
//               src={DarTechnology} 
//               alt="Logo" 
//               className="w-32 h-32 md:w-40 md:h-40 drop-shadow-lg" 
//             />
//           </div>
          
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
//            Login
//           </h2>

//           <div className="mb-6 relative bg-green-700 rounded-2xl">
//             <MdEmail className="absolute left-4 top-4 text-white" size={20} />
//             <input
//               type="email"
//               placeholder="Enter your email"
             
//               className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 "
//             />
//           </div>

//           <div className="mb-8 relative  bg-green-700 rounded-2xl ">
//             <RiLockPasswordFill
//               className="absolute left-4 top-4 text-white"
//               size={20}
//             />
//             <input
//               type="password"
//               placeholder="Enter your password"
            
//               className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 "
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full text-white bg-green-700  py-3 rounded-xl font-bold text-lg "
//           >
//             Login
//           </button>

         
//         </form>
        
      
//       </div>
//     </div>
//   );
// };

// export default Login;






import React from "react";
import { useNavigate } from "react-router-dom";
import DarTechnology from "../assets/image/image-removebg-preview.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/cardOpenAdminPannel");
  };

  return (

     

    <div className="bg-gradient-to-br from-black via-zinc-900 to-black  flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleLogin}

          className="bg-black p-6 rounded-3xl shadow-2xl w-full"

        >
          <div className="flex justify-center mb-6">
            <img 
              src={DarTechnology} 
              alt="Logo" 
              className="w-32 h-32 md:w-40 md:h-40 drop-shadow-lg" 
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
           Login
          </h2>

          <div className="mb-6 relative">
            <MdEmail className="absolute left-4 top-4 text-white/70" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
             
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="mb-8 relative">
            <RiLockPasswordFill
              className="absolute left-4 top-4 text-white/70"
              size={20}
            />
            <input
              type="password"
              placeholder="Enter your password"
            
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
            />
          </div>

          <button

            className="w-full bg-green-700 text-white  py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"

          >
            Login
          </button>

         
        </form>
        
      
      </div>
    </div>
  );
};

export default Login;