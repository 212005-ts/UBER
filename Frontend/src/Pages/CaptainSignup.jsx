import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault();
    const CaptainData = {
      fullname: ({
        firstname: firstName,
        lastname: lastName,
      }),
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }
  
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, CaptainData)


    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    };

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  };

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between bg-gray-50">
      <div className="max-w-md mx-auto w-full">
        <img
          className="w-20 mb-6"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
          alt="Uber Logo"
        />

        <form onSubmit={(e) => submitHandler(e)} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl w-full font-semibold mb-3">What's our Captain's name?</h3>
          <div className='flex gap-4 mb-6'>
            <input
              className="bg-[#eeeeee] w-1/2 rounded-md px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-gray-200 text-lg placeholder:text-base"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded-md px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-gray-200 text-lg placeholder:text-base"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className="text-xl font-semibold mb-3">What's our Captain's email?</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded-md px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-gray-200 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-xl font-semibold mb-3">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded-md px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-gray-200 w-full text-base placeholder:text-sm"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h3 className="text-xl font-semibold mb-3">Vehicle Details</h3>
          <div className='flex gap-4 mb-6'>
            <input
              className="bg-[#eeeeee] w-1/2 rounded-md px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-gray-200 text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded-md px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-gray-200 text-lg placeholder:text-base"
              type="text"
              placeholder="Plate Number"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>

          <div className='flex gap-4 mb-8'>
            <input
              className="bg-[#eeeeee] w-1/2 rounded-md px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-gray-200 text-lg placeholder:text-base"
              type="number"
              placeholder="Passenger Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              className="bg-[#eeeeee] w-1/2 rounded-md px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-gray-200 text-lg"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="bike">Bike</option>
            </select>
          </div>

          <button
            className="bg-[#111] text-white font-semibold mb-6 rounded-md px-4 py-3 w-full text-lg hover:bg-black transition-colors"
            type="submit"
          >
            Create Captain Account
          </button>

          <p className="text-center text-gray-600 mb-8">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600 hover:text-blue-700 font-medium">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div className="max-w-md mx-auto w-full">
        <p className='text-[10px] mt-6 text-gray-500 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline cursor-pointer'>Google Privacy Policy</span> and <span className='underline cursor-pointer'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignup
