import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import{ sendOtp } from '../../../services/operations/authAPI'
import { setSignupData } from '../../../slices/authSlice';

function SignupForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData]=useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      otp: '',
  });
  const { firstName, lastName, email, password, confirmPassword } = formData;


  const  handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value});
  };

  const submitHandler = (e)=> {

    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }

    dispatch(setSignupData(formData));

    dispatch(sendOtp(formData.email, navigate));
   
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      otp: '',
    })

  }

  return (
    <form onSubmit={submitHandler}>
      {/* { dispatch(setLoading(true)) } */}
      <div className="flex  flex-wrap justify-between mt-4">
        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            First Name <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Last Name <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
      </div>

      <label className="w-full ">
        <p className="mb-1 mt-4 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter email address"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
        />
      </label>
      <div className="flex  flex-wrap justify-between mt-4">
        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Create Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter password"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Confirm Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Create Account
      </button>
    </form>
    
  )
}

export default SignupForm