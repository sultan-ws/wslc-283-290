"use client"
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
export default function Login({loginStatus,setLoginStatus}) {
  let [compStatus,setCompStatus]=useState(true)
  
  return (
    <section className={` ${loginStatus ? "block" : "hidden"} w-full h-screen flex bg-[rgba(0,0,0,0.4)] items-center justify-center  fixed  left-0 top-0 z-[9999999]`}>
        <form className='relative lg:w-[42%] md:w-[80%] h-[700px] overflow-scroll  px-10 pt-5 pb-8 bg-[#F9F9F9] overflow-x-hidden mt-5'>
          <button onClick={()=>setLoginStatus(false)} className=" z-[999999999] absolute top-3 right-3 border-red-700" >
        <IoCloseSharp className="w-8 h-8" />
          </button>
            <div className='text-center'>
                <h3 className='text-[22px] font-semibold mb-1'>Welcome back!</h3>
                <p className='text-[14px] font-semibold'>Log in to enjoy your perks</p>
            </div>
            <div className="flex justify-between py-8 px-6">
            <div className="text-center space-y-1.5">
              <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none"><g clip-path="url(#clip0_2406_20469)">
                <path d="M18.9397 16.0898C18.9397 15.7398 18.8797 15.3898 18.7697 15.0498C18.7397 14.9398 18.6997 14.8298 18.6497 14.7298C18.3397 13.9998 17.7997 13.3998 17.1097 13.0298C16.9097 12.9298 16.7097 12.8398 16.4897 12.7798C16.2697 12.7098 16.0497 12.6698 15.8197 12.6498C15.5897 12.6298 15.3497 12.6298 15.1197 12.6498C14.8897 12.6798 14.6697 12.7198 14.4597 12.7998C14.3497 12.8398 14.2497 12.8798 14.1497 12.9198C13.7097 13.1098 13.3197 13.3998 12.9997 13.7598C12.6797 14.1198 12.4297 14.5398 12.2797 15.0098C12.1297 15.4698 12.0697 15.9598 12.1097 16.4498C12.1497 16.9398 12.2897 17.4098 12.5297 17.8298C12.5497 17.8598 12.5697 17.8998 12.5897 17.9298C12.6497 18.0198 12.7097 18.1198 12.7697 18.1998C13.1997 18.7898 13.7997 19.2298 14.4897 19.4598C15.1797 19.6798 15.9197 19.6798 16.5997 19.4398C17.2797 19.2098 17.8797 18.7598 18.2997 18.1498C18.7197 17.5498 18.9397 16.8298 18.9297 16.0898V16.0698L18.9397 16.0898Z" fill="black"></path>
                <path d="M8.08 3.31982L0 6.02982L5.66 23.6598C10.35 19.3498 11.28 11.8198 8.08 3.31982Z" fill="black"></path>
                <path d="M21.8598 0.000234375L11.2598 0.150234C11.3498 6.14023 16.1598 10.9202 22.0198 10.8302L21.8698 -0.00976562L21.8598 0.000234375Z" fill="black"></path>
                </g><defs><clipPath id="clip0_2406_20469"><rect width="22.02" height="23.66" fill="white"></rect></clipPath></defs></svg>
              <p className="text-[12px]  font-semibold">Frank&apos;s Club</p>
              <p className="text-[12px]  font-semibold">Earn points, get rewards</p>
            </div>
            <div className="text-center space-y-1.5">
            <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none"><g clip-path="url(#clip0_2406_20478)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.94055 11.3201L11.3705 20.7501C11.5905 20.9701 11.9505 20.9701 12.1805 20.7501L21.6105 11.3201C24.2005 8.73006 24.2005 4.53006 21.6105 1.94006C19.0205 -0.649941 14.8205 -0.649941 12.2305 1.94006C11.8705 2.30006 11.7805 2.46006 11.7805 2.46006C11.7805 2.46006 11.4905 2.11006 11.3305 1.94006C8.73055 -0.649941 4.53055 -0.649941 1.94055 1.94006C-0.649453 4.53006 -0.649453 8.73006 1.94055 11.3201Z" fill="black"></path></g><defs><clipPath id="clip0_2406_20478"><rect width="23.56" height="20.92" fill="white"></rect></clipPath></defs></svg>
              <p className="text-[12px]  font-semibold">Wishlist</p>
              <p className="text-[12px]  font-semibold">Save your favourites</p>
            </div>
            <div className="text-center space-y-1.5">
            <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none"><g clip-path="url(#clip0_2406_20485)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0208 8.73C-0.0492 9.1 0.0608 9.49 0.3008 9.78L10.8608 22.31C11.3108 22.85 12.1208 22.92 12.6608 22.46L21.7708 14.78C22.3108 14.33 22.3808 13.52 21.9208 12.98L11.3608 0.45C11.1108 0.16 10.7508 0 10.3808 0L2.3008 0.03C1.8808 0.03 1.5208 0.33 1.4508 0.75L0.0208 8.73ZM4.8308 3.93C5.2208 3.58 5.8508 3.61 6.2108 4.05C6.5308 4.44 6.4908 5.07 6.0908 5.43C5.6608 5.75 5.0708 5.71 4.7108 5.31C4.3608 4.88 4.3908 4.29 4.8308 3.93Z" fill="black"></path></g><defs><clipPath id="clip0_2406_20485"><rect width="22.21" height="22.77" fill="white"></rect></clipPath></defs></svg>
              <p className="text-[12px]  font-semibold">Early access</p>
              <p className="text-[12px]  font-semibold">Exclusive sale perks</p>
            </div>
            </div>
            { compStatus ? <LoginBox /> : <SignUpBox setCompStatus={setCompStatus} compStatus={compStatus} />}
            <div>
              <div className="text-[13px] text-center font-semibold">Social login</div>
              <div className="lg:flex block justify-between py-6 lg:space-y-0 space-y-2">
                <button className="border-2 hover:bg-[#CCCCCC] lg:w-auto w-full duration-500 border-black py-2.5 px-10 text-[14px] font-medium flex items-center justify-center gap-3"><FaFacebookF className="text-[16px]" /> Sign in with Facebook</button>
                <button className="border-2 hover:bg-[#CCCCCC] lg:w-auto w-full duration-500 border-black py-2.5 px-10 text-[14px] font-medium flex items-center justify-center gap-3"><FaGoogle className="text-[16px]" /> Sign in with Google</button>
              </div>
            </div>
            <div className="text-center">
              <div className="text-[13px] text-center font-semibold">Create an account</div>
              <div className="pt-3 text-[14px] font-semibold">
              Don&apos;t have an account? <span onClick={()=>setCompStatus(false)} className="underline underline-offset-4 cursor-pointer"> Sign up <BsArrowRight className="inline" /></span>
              </div>
            </div>

        </form>
    </section>
  )
}


function LoginBox() {
  
  return (
    <div className="flex flex-col gap-3 py-6">
    <input className="p-3 border text-[#757575] text-[14px] font-semibold border-[#757575] " type="text" placeholder="Email Address" />
    <input className="p-3 border text-[#757575] text-[14px] font-semibold border-[#757575] " type="tel" placeholder="Password" />
    <span className="text-[13px] font-semibold underline">Forgot Password?</span>
    <button  className="p-3.5 mt-2 bg-black text-white font-semibold">Log In</button>
  </div>
  )
}


function SignUpBox({setCompStatus,compStatus}) {
  return (
    <div className="flex flex-col gap-3 py-6">
       <div className="pt-3 text-[14px] text-center font-semibold">
       Already have an account? <span onClick={()=>setCompStatus(true)} className="underline underline-offset-4 cursor-pointer">  Log in <BsArrowRight className="inline" /></span>
       </div>
       <div className="py-5 border-t border-gray-300"> 
        <div className="grid grid-cols-2 gap-5 mb-3">
        <input className="p-3 border text-[#757575] text-[14px] font-semibold border-[#757575] " type="text" placeholder="First Name" />
        <input className="p-3 border text-[#757575] text-[14px] font-semibold border-[#757575] " type="text" placeholder="Last Name" />
        </div>
        <div className="flex flex-col gap-3">
    <input className="p-3 border text-[#757575] text-[14px] font-semibold border-[#757575] " type="text" placeholder="Email Address" />
    <input className="p-3 border text-[#757575] text-[14px] font-semibold border-[#757575] " type="tel" placeholder="Password" />
    <div className="text-[14px] flex gap-5 font-medium">I shop for 
      <div className="flex items-center gap-3">
      <input type="radio" name="radio" id="" /> Men
      <input type="radio" name="radio" id="" /> Women
      <input type="radio" name="radio" id="" /> All
    </div>
     </div>
     <div>
     <div class="flex gap-2 pt-3">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-6 h-6  text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label className="text-[14px] font-semibold">
                        Yes, sign me up to the Frank And Oak newsletter to never miss out on product launches and exclusive promotions.
                    </label>
      </div>
      <button className="p-3.5 mt-4 w-full bg-black text-white font-semibold">Sign Up</button>
     </div>
        </div>
       </div>
    </div>
  )
}
