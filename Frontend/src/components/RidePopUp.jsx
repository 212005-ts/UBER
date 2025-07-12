import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setRidePopUpPanel(false)}
        className='p-1 text-center w-[93%] absolute top-0'
      >
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className='text-2xl font-semibold mb-5'>New Ride Available! </h3>
      <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
        <div className='gap-3 flex items-center'>
          <img className='h-12 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbSPvKEqdLc6ychr98s0fzXXnK_aQ9KLYjQ&s" alt="" />
          <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 KM</h5>
      </div>
      <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-kg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-700'>{props.ride?.pickup}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-kg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-700'>{props.ride?.destination}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-fill"></i>
            <div>
              <h3 className='text-kg font-medium'>₹{props.ride?.fare}</h3>
              <p className='text-sm -mt-1 text-gray-700'>Cash Cash</p>
            </div>
          </div>
        </div>
        <div className='flex mt-5 w-full items-center justify-between'>
          <button onClick={() => {
            props.setConfirmRidePopUpPanel(true);
            props.confirmRide()
          }} className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>
          <button onClick={() => {
            props.setRidePopUpPanel(false);
          }} className=' mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg'>Ignore</button>
        </div>
      </div>
    </div>
  )
}

export default RidePopUp
