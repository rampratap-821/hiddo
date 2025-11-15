




import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { MdPayment } from 'react-icons/md'

const HiddoHome2 = () => {
  return (
    <div className=' grid grid-cols-3 gap-5 '>
    <div className='bg-yellow-700 text-white text-center py-10 [&>*]:py-2 font-bold text-2xl rounded-2xl'>
      <h1 >306B</h1>
      <h1 className='flex justify-center text-3xl'>
        <FaUsers></FaUsers>
      </h1>
      <h1>Total Users</h1>
    </div>


     <div className='bg-teal-700 text-white text-center py-10 [&>*]:py-2 font-bold text-2xl rounded-2xl'>
      <h1 >10M</h1>
      <h1 className='flex justify-center text-3xl'>
        <MdPayment></MdPayment>
      </h1>
      <h1>Payment by users</h1>
    </div>



    
    </div>
  )
}

export default HiddoHome2
