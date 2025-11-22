// // import React from 'react'
// // import { CgProfile } from 'react-icons/cg'
// // import { FaAddressCard, FaCoins, FaMapMarkedAlt, FaMapMarkerAlt, FaPhone, FaUser } from 'react-icons/fa'
// // import { GiPhone } from 'react-icons/gi'
// // import { IoIosGift } from 'react-icons/io'
// // import { MdOutlineUpdate } from 'react-icons/md'
// // import { RiCoinsFill } from 'react-icons/ri'
// // import { Link } from 'react-router-dom'

// // const UsersList = () => {
// //   return (
// //     <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-5 '>
// //       <div className='py-5  lg:py-10 bg-black rounded-2xl'>
// //         <h1 className=' text-center text-2xl font-bold text-green-900'>Users Mnagement</h1>

// //         <div className=' px-10 '>

// //           <div className='bg-white/20 text-white text-center py-7 [&>*]:py-2 font-bold text-2xl rounded-2xl mt-7 '>
// //             <h1 className='flex justify-center text-3xl'>
// //               <FaUser></FaUser>
// //             </h1>
// //             <h1 >307</h1>
// //             <h1>Total Users</h1>
// //           </div>


// //           <div className='[&>*]:py-2'>
// //             <div className='mt-2'>
// //               <input type='text' className='w-full p-2 rounded' placeholder='enter' />
// //             </div>
// //             <div>
// //               <input type='text' className='w-full p-2 rounded' placeholder='enter' />
// //             </div>
// //             <div>
// //               <button className='w-full p-2 rounded bg-green-900 font-bold'>Summit</button>
// //             </div>
// //           </div>

// //         </div>
// //       </div>



// //       <div className='grid grid-cols-1 gap-5 '>
// //         <div className='bg-white shadow-lg rounded-2xl py-10'>
// //           <div className='flex gap-10   px-5 rounded-xl'>

// //             <div className='w-12 h-12 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold text-xl'>
// //               R
// //             </div>

// //             <div>
// //               <div className=' text-2xl font-semibold'>
// //                 Rampratap
// //               </div>

// //               <div className=' text-xl  flex items-center gap-2'>
// //                 <FaAddressCard></FaAddressCard>
// //                 <h1>Noida</h1>
// //               </div>

// //               <div className=' text-xl  flex items-center gap-2'>
// //                 <FaMapMarkerAlt></FaMapMarkerAlt>
// //                 <h1>Noida</h1>
// //               </div>

// //               <div className=' text-xl  flex items-center gap-2'>
// //                 <IoIosGift></IoIosGift>
// //                 <h1>No referal code</h1>
// //               </div>

// //               <div className=' text-xl  flex items-center gap-2'>
// //                 <GiPhone></GiPhone>
// //                 <h1>No Phone Number</h1>
// //               </div>

// //               <div className=' text-xl  flex items-center gap-2'>
// //                 <FaCoins></FaCoins>
// //                 <h1>Coins</h1>
// //               </div>

// //               <div className=' text-xl  flex items-center gap-2'>
// //                 <RiCoinsFill></RiCoinsFill>
// //                 <h1>Ads wat :0ct</h1>
// //               </div>

// //               <div className=' text-xl  flex items-center gap-2'>
// //                 <RiCoinsFill></RiCoinsFill>
// //                 <h1>Payment Record : 0</h1>
// //               </div>

// //             </div>
// //           </div>

// //           <div className='px-5 pt-5 grid grid-cols-2 gap-2'>
// //             <div className='flex items-center gap-2 font-bold bg-blue-700 justify-center py-2 rounded-xl'>
// //               <MdOutlineUpdate className='text-xl'></MdOutlineUpdate>
// //               <Link>Node Update</Link>
// //             </div>

// //              <div className='flex items-center gap-2 font-bold bg-pink-900 justify-center py-2 rounded-xl'>
// //               <CgProfile className='text-xl'></CgProfile>
// //               <Link>Status</Link>
// //             </div>


// //              <div className='flex items-center gap-2 font-bold bg-teal-700 justify-center py-2 rounded-xl'>
// //               <MdOutlineUpdate className='text-xl'></MdOutlineUpdate>
// //               <Link>Remove Ads History</Link>
// //             </div>

// //              <div className='flex items-center gap-2 font-bold bg-violet-700 justify-center py-2 rounded-xl'>
// //               <MdOutlineUpdate className='text-xl'></MdOutlineUpdate>
// //               <Link>Remove Payment Record</Link>
// //             </div>
// //           </div>

// //         </div>



// //             <div className='bg-white shadow-lg rounded-2xl py-10'>
// //           <div className='flex gap-10   px-5 rounded-xl'>

// //             <div className='w-12 h-12 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold text-xl'>
// //               R
// //             </div>

// //             <div>
// //               <div className=' text-2xl font-semibold'>
// //                 Rampratap
// //               </div>

// //               <div className=' text-xl  flex items-center gap-2'>
// //                 <FaAddressCard></FaAddressCard>
// //                 <h1>Noida</h1>
// //               </div>

// //               <div className=' text-xl  flex items-center gap-2'>
// //                 <FaMapMarkerAlt></FaMapMarkerAlt>
// //                 <h1>Noida</h1>
// //               </div>

// //               <div className=' text-xl  flex items-center gap-2'>
// //                 <IoIosGift></IoIosGift>
// //                 <h1>No referal code</h1>
// //               </div>

// //               <div className=' text-xl  flex items-center gap-2'>
// //                 <GiPhone></GiPhone>
// //                 <h1>No Phone Number</h1>
// //               </div>

// //               <div className=' text-xl  flex items-center gap-2'>
// //                 <FaCoins></FaCoins>
// //                 <h1>Coins</h1>
// //               </div>

// //               <div className=' text-xl  flex items-center gap-2'>
// //                 <RiCoinsFill></RiCoinsFill>
// //                 <h1>Ads wat :0ct</h1>
// //               </div>

// //               <div className=' text-xl  flex items-center gap-2'>
// //                 <RiCoinsFill></RiCoinsFill>
// //                 <h1>Payment Record : 0</h1>
// //               </div>

// //             </div>
// //           </div>

// //           <div className='px-5 pt-5 grid grid-cols-2 gap-2'>
// //             <div className='flex items-center gap-2 font-bold bg-blue-700 justify-center py-2 rounded-xl'>
// //               <MdOutlineUpdate className='text-xl'></MdOutlineUpdate>
// //               <Link>Node Update</Link>
// //             </div>

// //              <div className='flex items-center gap-2 font-bold bg-pink-900 justify-center py-2 rounded-xl'>
// //               <CgProfile className='text-xl'></CgProfile>
// //               <Link>Status</Link>
// //             </div>


// //              <div className='flex items-center gap-2 font-bold bg-teal-700 justify-center py-2 rounded-xl'>
// //               <MdOutlineUpdate className='text-xl'></MdOutlineUpdate>
// //               <Link>Remove Ads History</Link>
// //             </div>

// //              <div className='flex items-center gap-2 font-bold bg-violet-700 justify-center py-2 rounded-xl'>
// //               <MdOutlineUpdate className='text-xl'></MdOutlineUpdate>
// //               <Link>Remove Payment Record</Link>
// //             </div>
// //           </div>

// //         </div>














// //       </div>







// //     </div>
// //   )
// // }

// export default UsersList












import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchTotalUsersLists } from '../Model/firebaseHelpers';
import { database } from '../FireBaseComponent/FirebaseConfig';
import { CgProfile } from 'react-icons/cg'
import { FaAddressCard, FaCoins, FaMapMarkedAlt, FaMapMarkerAlt, FaPhone, FaUser } from 'react-icons/fa'
import { GiPhone } from 'react-icons/gi'
import { IoIosGift } from 'react-icons/io'
import { MdOutlineUpdate } from 'react-icons/md'
import { RiCoinsFill } from 'react-icons/ri'

const UsersList = ({usersLists, setUsersList,allUsers, setAllUsers}) => {
    const[removeAdsHistory,setRemoveAdsHistory] = useState(true)
  
    
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  const [fieldKey, setFieldKey] = useState('');
  const [fieldValue, setFieldValue] = useState('');

  const handlePress = async () => {
    if (!fieldKey || !fieldValue) {
      alert("Error: Please enter both key and value");
     
      return;
    }


    const intValue = parseInt(fieldValue, 10);
    if (isNaN(intValue)) {
      alert("Error: Value must be a valid number");
      return;
    }

    try {
      const usersRef = database.ref("Users");
      const updates = {};
     

      usersLists.forEach((user) => {
        if (user?.id) {
          updates[`${user.id}/${fieldKey}`] = intValue;
        }
      });

      await usersRef.update(updates);
      alert("Success: Updated all users!");
      setFieldKey("");
      setFieldValue("");
    } catch (err) {
      console.error(err);
      alert("Error: Failed to update users");
    }
  };



 
  const loadUsers = async () => {
    try {
      setLoading(true);
      const { users, error } = await fetchTotalUsersLists();
    
      
      if (error) {
        console.error("Error loading users:", error);
        alert("Error: Failed to load users");
        setUsersList([]);
        setAllUsers([])
      } else if (users && Array.isArray(users)) {
        const sortedUsers = [...users].sort((a, b) =>
          (a?.fullName || "").toLowerCase().localeCompare((b?.fullName || "").toLowerCase())
        );
        setUsersList(sortedUsers);
        setAllUsers(sortedUsers)
      } else {
        console.warn("No users found");
        setUsersList([]);
       setAllUsers([]);

      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("Error: An unexpected error occurred");
      setUsersList([]);
      setAllUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [location.pathname]);

   

  if (loading) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-black'>
        <div className='w-12 h-12 border-4 border-green-900 border-t-transparent rounded-full animate-spin'></div>
        <p className='mt-3 text-white'>Loading users...</p>
      </div>
    );
  }

return (
<div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row gap-5 p-5">

  {/* LEFT BOX — MOBILE = NORMAL, DESKTOP = STICKY FIXED */}
  <div
    className="
      w-full lg:w-[350px]  py-10
      bg-green-600 rounded-2xl p-6 h-fit
      lg:sticky lg:top-[5px] lg:self-start
    "
  >



    <div>
    <h1 className='text-center text-2xl font-bold text-green-900'>
      Users Management
    </h1>
    </div>


    {/* Total Users */}
    <div className='bg-white/20 text-white text-center py-7 font-bold text-2xl rounded-2xl mt-7'>
      <h1 className='flex justify-center text-3xl'>
        <FaUser />
      </h1>
      <h1>{usersLists.length}</h1>
      <h1>Total Users</h1>
    </div>

    {/* Inputs */}
    <div className='mt-5'>
      <input
        type='text'
        className='w-full p-3 rounded mb-3'
        placeholder='Enter Key'
        value={fieldKey}
        onChange={(e) => setFieldKey(e.target.value)}
      />

      <input
        type='text'
        className='w-full p-3 rounded mb-3'
        placeholder='Enter Value'
        value={fieldValue}
        onChange={(e) => setFieldValue(e.target.value)}
      />

      <button
        className='w-full p-3 rounded bg-green-900 font-bold text-white hover:bg-green-800 transition-colors'
        onClick={handlePress}
      >
        Submit
      </button>
    </div>
  </div>

  {/* RIGHT SIDE — ALWAYS SCROLLABLE, FULL RESPONSIVE */}
  {
   removeAdsHistory === true ?
    <div className="flex-1 overflow-y-auto pr-1 lg:pr-3">
    <div className="grid grid-cols-1 gap-5">

      {usersLists.length === 0 ? (
        <div className="bg-white shadow-lg rounded-2xl py-10 text-center">
          <div className="text-5xl text-gray-300 mb-4">👥</div>
          <p className="text-gray-500 text-lg">No users found</p>
        </div>
      ) : (
        usersLists.map((item, index) => (
          <div key={item?.id || index} className="bg-white shadow-lg rounded-2xl py-10">
            
        
            <div className="flex gap-5 px-5 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold text-xl">
                {item?.fullName ? item.fullName.charAt(0).toUpperCase() : 'U'}
              </div>

              <div className="flex-1">
                <div className="text-2xl font-semibold mb-2">
                  {item?.fullName || 'Unknown User'}
                </div>

                <div className='text-xl flex items-center gap-2 mb-1'>
                  <FaAddressCard />
                  <span className='truncate'>
                    {item?.UserLocation
                      ? (typeof item.UserLocation === "object"
                        ? `${item.UserLocation?.city || ""}, ${item.UserLocation?.country || ""}`
                        : String(item.UserLocation))
                      : "Location not specified"}
                  </span>
                </div>

                <div className='text-xl flex items-center gap-2 mb-1'>
                  <FaMapMarkerAlt />
                  <span>{item?.UserLocation || 'Location not specified'}</span>
                </div>

                <div className='text-xl flex items-center gap-2 mb-1'>
                  <IoIosGift />
                  <span>{item?.referalCode || 'No referal code'}</span>
                </div>

                <div className='text-xl flex items-center gap-2 mb-1'>
                  <GiPhone />
                  <span>{item?.phoneNumber || 'No Phone Number'}</span>
                </div>

                <div className='text-xl flex items-center gap-2 mb-1'>
                  <FaCoins />
                  <span>Coins: {item?.userCoins || 0}</span>
                </div>

                <div className='text-xl flex items-center gap-2 mb-1'>
                  <RiCoinsFill />
                  <span>Ads Watch: {item?.userCoinsReords?.length || 0}</span>
                </div>

                <div className='text-xl flex items-center gap-2 mb-1'>
                  <RiCoinsFill />
                  <span>Payment Record: {item?.userPaymentReords?.length || 0}</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="px-5 pt-5 grid grid-cols-2 gap-2">
              <div
                className="flex items-center gap-2 font-bold bg-blue-700 justify-center py-2 rounded-xl text-white"
                onClick={() => navigate('/user-details', { state: { userData: item } })}
              >
                <MdOutlineUpdate className='text-xl' />
                <span>Node Update</span>
              </div>

              <div
                className="flex items-center gap-2 font-bold bg-pink-900 justify-center py-2 rounded-xl text-white"
                onClick={() => navigate('/status-active-deactive-delete', { state: { userData: item } })}
              >
                <CgProfile className='text-xl' />
                <span>Status</span>
              </div>

              <div
                className="flex items-center gap-2 font-bold bg-teal-700 justify-center py-2 rounded-xl text-white"
               onClick={()=>setRemoveAdsHistory(false)}
              >
                <MdOutlineUpdate className='text-xl' />
                <span>Remove Ads History</span>
              </div>

              <div
                className="flex items-center gap-2 font-bold bg-violet-700 justify-center py-2 rounded-xl text-white"
                onClick={() => navigate('/remove-payment-records', { state: { userEmail: item.email } })}
              >
                <MdOutlineUpdate className='text-xl' />
                <span>Remove Payment Record</span>
              </div>
            </div>

          </div>
        ))
      )}

    </div>
  </div>
  :
  
    <div>
    <hi className ="text-black">rampratap paswan</hi>
  </div>

  
   
  }
 

</div>
)

};

export default UsersList;
