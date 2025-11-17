// import React from 'react'
// import { CgProfile } from 'react-icons/cg'
// import { FaAddressCard, FaCoins, FaMapMarkedAlt, FaMapMarkerAlt, FaPhone, FaUser } from 'react-icons/fa'
// import { GiPhone } from 'react-icons/gi'
// import { IoIosGift } from 'react-icons/io'
// import { MdOutlineUpdate } from 'react-icons/md'
// import { RiCoinsFill } from 'react-icons/ri'
// import { Link } from 'react-router-dom'

// const UsersList = () => {
//   return (
//     <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-5 '>
//       <div className='py-5  lg:py-10 bg-black rounded-2xl'>
//         <h1 className=' text-center text-2xl font-bold text-green-900'>Users Mnagement</h1>

//         <div className=' px-10 '>

//           <div className='bg-white/20 text-white text-center py-7 [&>*]:py-2 font-bold text-2xl rounded-2xl mt-7 '>
//             <h1 className='flex justify-center text-3xl'>
//               <FaUser></FaUser>
//             </h1>
//             <h1 >307</h1>
//             <h1>Total Users</h1>
//           </div>


//           <div className='[&>*]:py-2'>
//             <div className='mt-2'>
//               <input type='text' className='w-full p-2 rounded' placeholder='enter' />
//             </div>
//             <div>
//               <input type='text' className='w-full p-2 rounded' placeholder='enter' />
//             </div>
//             <div>
//               <button className='w-full p-2 rounded bg-green-900 font-bold'>Summit</button>
//             </div>
//           </div>

//         </div>
//       </div>



//       <div className='grid grid-cols-1 gap-5 '>
//         <div className='bg-white shadow-lg rounded-2xl py-10'>
//           <div className='flex gap-10   px-5 rounded-xl'>

//             <div className='w-12 h-12 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold text-xl'>
//               R
//             </div>

//             <div>
//               <div className=' text-2xl font-semibold'>
//                 Rampratap
//               </div>

//               <div className=' text-xl  flex items-center gap-2'>
//                 <FaAddressCard></FaAddressCard>
//                 <h1>Noida</h1>
//               </div>

//               <div className=' text-xl  flex items-center gap-2'>
//                 <FaMapMarkerAlt></FaMapMarkerAlt>
//                 <h1>Noida</h1>
//               </div>

//               <div className=' text-xl  flex items-center gap-2'>
//                 <IoIosGift></IoIosGift>
//                 <h1>No referal code</h1>
//               </div>

//               <div className=' text-xl  flex items-center gap-2'>
//                 <GiPhone></GiPhone>
//                 <h1>No Phone Number</h1>
//               </div>

//               <div className=' text-xl  flex items-center gap-2'>
//                 <FaCoins></FaCoins>
//                 <h1>Coins</h1>
//               </div>

//               <div className=' text-xl  flex items-center gap-2'>
//                 <RiCoinsFill></RiCoinsFill>
//                 <h1>Ads wat :0ct</h1>
//               </div>

//               <div className=' text-xl  flex items-center gap-2'>
//                 <RiCoinsFill></RiCoinsFill>
//                 <h1>Payment Record : 0</h1>
//               </div>

//             </div>
//           </div>

//           <div className='px-5 pt-5 grid grid-cols-2 gap-2'>
//             <div className='flex items-center gap-2 font-bold bg-blue-700 justify-center py-2 rounded-xl'>
//               <MdOutlineUpdate className='text-xl'></MdOutlineUpdate>
//               <Link>Node Update</Link>
//             </div>

//              <div className='flex items-center gap-2 font-bold bg-pink-900 justify-center py-2 rounded-xl'>
//               <CgProfile className='text-xl'></CgProfile>
//               <Link>Status</Link>
//             </div>


//              <div className='flex items-center gap-2 font-bold bg-teal-700 justify-center py-2 rounded-xl'>
//               <MdOutlineUpdate className='text-xl'></MdOutlineUpdate>
//               <Link>Remove Ads History</Link>
//             </div>

//              <div className='flex items-center gap-2 font-bold bg-violet-700 justify-center py-2 rounded-xl'>
//               <MdOutlineUpdate className='text-xl'></MdOutlineUpdate>
//               <Link>Remove Payment Record</Link>
//             </div>
//           </div>

//         </div>



//             <div className='bg-white shadow-lg rounded-2xl py-10'>
//           <div className='flex gap-10   px-5 rounded-xl'>

//             <div className='w-12 h-12 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold text-xl'>
//               R
//             </div>

//             <div>
//               <div className=' text-2xl font-semibold'>
//                 Rampratap
//               </div>

//               <div className=' text-xl  flex items-center gap-2'>
//                 <FaAddressCard></FaAddressCard>
//                 <h1>Noida</h1>
//               </div>

//               <div className=' text-xl  flex items-center gap-2'>
//                 <FaMapMarkerAlt></FaMapMarkerAlt>
//                 <h1>Noida</h1>
//               </div>

//               <div className=' text-xl  flex items-center gap-2'>
//                 <IoIosGift></IoIosGift>
//                 <h1>No referal code</h1>
//               </div>

//               <div className=' text-xl  flex items-center gap-2'>
//                 <GiPhone></GiPhone>
//                 <h1>No Phone Number</h1>
//               </div>

//               <div className=' text-xl  flex items-center gap-2'>
//                 <FaCoins></FaCoins>
//                 <h1>Coins</h1>
//               </div>

//               <div className=' text-xl  flex items-center gap-2'>
//                 <RiCoinsFill></RiCoinsFill>
//                 <h1>Ads wat :0ct</h1>
//               </div>

//               <div className=' text-xl  flex items-center gap-2'>
//                 <RiCoinsFill></RiCoinsFill>
//                 <h1>Payment Record : 0</h1>
//               </div>

//             </div>
//           </div>

//           <div className='px-5 pt-5 grid grid-cols-2 gap-2'>
//             <div className='flex items-center gap-2 font-bold bg-blue-700 justify-center py-2 rounded-xl'>
//               <MdOutlineUpdate className='text-xl'></MdOutlineUpdate>
//               <Link>Node Update</Link>
//             </div>

//              <div className='flex items-center gap-2 font-bold bg-pink-900 justify-center py-2 rounded-xl'>
//               <CgProfile className='text-xl'></CgProfile>
//               <Link>Status</Link>
//             </div>


//              <div className='flex items-center gap-2 font-bold bg-teal-700 justify-center py-2 rounded-xl'>
//               <MdOutlineUpdate className='text-xl'></MdOutlineUpdate>
//               <Link>Remove Ads History</Link>
//             </div>

//              <div className='flex items-center gap-2 font-bold bg-violet-700 justify-center py-2 rounded-xl'>
//               <MdOutlineUpdate className='text-xl'></MdOutlineUpdate>
//               <Link>Remove Payment Record</Link>
//             </div>
//           </div>

//         </div>














//       </div>







//     </div>
//   )
// }

// export default UsersList
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaAddressCard, FaCoins, FaMapMarkerAlt, FaUser } from 'react-icons/fa'
import { GiPhone } from 'react-icons/gi'
import { IoIosGift } from 'react-icons/io'
import { MdOutlineUpdate } from 'react-icons/md'
import { RiCoinsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const UsersList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-auto md:h-screen overflow-hidden">

      {/* LEFT PANEL */}
      <div className="py-5 lg:py-10 bg-black rounded-2xl
                      md:sticky md:top-0 
                      md:h-screen 
                      h-auto 
                      overflow-y-visible md:overflow-y-auto">

        <h1 className="text-center text-2xl font-bold text-green-900">
          Users Management
        </h1>

        <div className="px-10">
          <div className='bg-white/20 text-white text-center py-7 [&>*]:py-2 font-bold text-2xl rounded-2xl mt-7'>
            <h1 className='flex justify-center text-3xl'><FaUser /></h1>
            <h1>307</h1>
            <h1>Total Users</h1>
          </div>

          <div className='[&>*]:py-2'>
            <div className='mt-2'>
              <input type='text' className='w-full p-2 rounded' placeholder='enter' />
            </div>
            <div>
              <input type='text' className='w-full p-2 rounded' placeholder='enter' />
            </div>
            <div>
              <button className='w-full p-2 rounded bg-green-900 font-bold'>Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT → SCROLL CARDS */}
      <div className="overflow-y-auto h-auto md:h-screen pr-3 scrollbar-hide">

        <div className='bg-white shadow-lg rounded-2xl py-10 mb-5'>
          <Card />
        </div>

        <div className='bg-white shadow-lg rounded-2xl py-10 mb-5'>
          <Card />
        </div>

        <div className='bg-white shadow-lg rounded-2xl py-10 mb-5'>
          <Card />
        </div>

        <div className='bg-white shadow-lg rounded-2xl py-10 mb-5'>
          <Card />
        </div>

      </div>
    </div>
  )
}

export default UsersList


/* ---------------- CARD COMPONENT ---------------- */
const Card = () => {
  return (
    <>
      <div className='flex gap-10 px-5 rounded-xl'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold text-xl'>
          R
        </div>

        <div>
          <div className='text-2xl font-semibold'>Rampratap</div>

          <div className='text-xl flex items-center gap-2'>
            <FaAddressCard />
            <h1>Noida</h1>
          </div>

          <div className='text-xl flex items-center gap-2'>
            <FaMapMarkerAlt />
            <h1>Noida</h1>
          </div>

          <div className='text-xl flex items-center gap-2'>
            <IoIosGift />
            <h1>No referral code</h1>
          </div>

          <div className='text-xl flex items-center gap-2'>
            <GiPhone />
            <h1>No Phone Number</h1>
          </div>

          <div className='text-xl flex items-center gap-2'>
            <FaCoins />
            <h1>Coins</h1>
          </div>

          <div className='text-xl flex items-center gap-2'>
            <RiCoinsFill />
            <h1>Ads watched: 0</h1>
          </div>

          <div className='text-xl flex items-center gap-2'>
            <RiCoinsFill />
            <h1>Payment Record: 0</h1>
          </div>
        </div>
      </div>

      <div className='px-5 pt-5 grid grid-cols-2 gap-2'>
        <div className='flex items-center gap-2 font-bold bg-blue-700 justify-center py-2 rounded-xl'>
          <MdOutlineUpdate className='text-xl' />
          <Link>Node Update</Link>
        </div>

        <div className='flex items-center gap-2 font-bold bg-pink-900 justify-center py-2 rounded-xl'>
          <CgProfile className='text-xl' />
          <Link>Status</Link>
        </div>

        <div className='flex items-center gap-2 font-bold bg-teal-700 justify-center py-2 rounded-xl'>
          <MdOutlineUpdate className='text-xl' />
          <Link>Remove Ads History</Link>
        </div>

        <div className='flex items-center gap-2 font-bold bg-violet-700 justify-center py-2 rounded-xl'>
          <MdOutlineUpdate className='text-xl' />
          <Link>Remove Payment Record</Link>
        </div>
      </div>
    </>
  )
}

