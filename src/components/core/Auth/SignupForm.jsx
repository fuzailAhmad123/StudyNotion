import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {
  const[formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [showPasswordOne,setShowPasswordOne] = useState(false);
  const [showPasswordTwo,setShowPasswordTwo] = useState(false);

  const [accountType,setaccounType] =  useState("student");
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

 


  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
        toast.error("Password don't match")
        return;
    }
    else{
        setIsLoggedIn(true);
        toast.success("account Created");
        const accountData = {
            ...formData
        };
        const finalData = {
          ...accountData,
          accountType
        }
        console.log("Printing Account Data");
        console.log(finalData);
        navigate("/dashboard");
    }
}

  return (
    <div>
      {/* student -instructor tb */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button className={`${accountType === "student" ?
        "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setaccounType("student")}
        >Student</button>
        <button
         className={`${accountType === "instructor" ?
         "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
         onClick={() => setaccounType("instructor")}
        >Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* fist and last name  */}
        <div className="flex gap-x-4 mt-10">
          <label>
            <p className='text-[0.875rem] text-richblack-5  mb-1 leading-[1.375rem]'>
              Enter First Name <sup className='text-pink-200'>*</sup>
            </p>

            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={formData.firstname}
              className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px]'
            />
          </label>

          <label>
            <p className='text-[0.875rem] text-richblack-5  mb-1 leading-[1.375rem]'>
              Enter Last Name <sup className='text-pink-200'>*</sup>
            </p>

            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter last name"
              value={formData.lastname}
              className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px]'
            />
          </label>
        </div>

        {/* emial add  */}
        <div className="mt-4">
        <label>
          <p className='text-[0.875rem] text-richblack-5  mb-1 leading-[1.375rem]'>
            Enter Email <sup className='text-pink-200'>*</sup>
          </p>

          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email"
            value={formData.email}
            className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px]'
          />
        </label>
        </div>
       

        {/* password and confirm pas  */}

        <div className="flex gap-x-4 mt-4">

         <label className="relative">
            <p
            className='text-[0.875rem] text-richblack-5  mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup> </p>
          <input 
          required
          type={showPasswordOne ? ("text")  :  ("password")}
          value={formData.password}
          name='password'
          onChange={changeHandler}
          placeholder='Enter Password here'
          className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px]'
          />

          <span
           className="absolute right-3 top-[38px]"
          onClick={() => setShowPasswordOne((prev)=> !prev)}>
            {showPasswordOne ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
          </span>
        </label>

        <label className="relative">
            <p
            className='text-[0.875rem] text-richblack-5  mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup> </p>
          <input 
          required
          type={showPasswordTwo ? ("text")  :  ("password")}
          value={formData.confirmPassword}
          name='confirmPassword'
          onChange={changeHandler}
          placeholder='Enter Password here'
          className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px]'
          />

          <span
           className="absolute top-[38px] right-3"
          onClick={() => setShowPasswordTwo((prev)=> !prev)}>
            {showPasswordTwo ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
          </span>
        </label>

        </div>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900  px-[12px] py-[8px] mt-5 w-full' >
            Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
