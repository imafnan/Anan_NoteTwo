import "./Register.css";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";



const Register = () => {

    
      // const [UserName , setUserName]              =useState('')
      // const [userNameError , setuserNAmeError]    =useState('')


      // const [Email , setEmail]                    =useState('')
      // const [emailError , setemailError]          =useState('')
      
    
      const [showPassword , hidePasssword]        = useState(false)

      // const [PassWord , setPassWord]              =useState('')
      // const [passwordError , setpasswordErrorr]   =useState('')
  
    // =================== N
         
    

    //--------------------- Funtions Part Start --------------------- 
      

  return (
    <div className="container">
      <div className="FullRegister">
        <div className="MainRegister">
          {/* 🌴🌴🌴🌴🌴 Blue Color Side Start 🌴🌴🌴🌴🌴 */}
          <div className="BluSide">
            <h1 className="Re_Login">Anan_Note</h1>
            <h1 className="Re_Title">Welcome Back!</h1>
            <p className="Re_Ptag">
              To keep connected with us please login with your personal info
            </p>
            <div className="BluLgButton">
              <button><a href="#">Login</a> </button>
            </div>
          </div>

          {/* 🌴🌴🌴🌴🌴 Form Side Start 🌴🌴🌴🌴🌴 */}
          <div className="formSide">
            <h1 className="Re_FormTitle">Create Account</h1>

            {/* Social Icons */}
            <div className="Re_Icons">
              <div className="icons">
                <FaFacebookF className="faceBook" />
              </div>
              <div className="icons">
                <FcGoogle />
              </div>
              <div className="icons">
                <FaLinkedinIn />
              </div>
            </div>
            <p>Or use your email for registration</p>

            {/* Input Fields */}
            <div className="Re_input">
              <div className="real">
              
              <div className="MainInput">
                <FaUser className="iconsI" />
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="MainInput">
                <MdEmail className="iconsI" />
                <input type="email" placeholder="Enter Your Email" />
              </div>

              <div className="MainInput password">
                <RiLockPasswordFill className="iconsI" />
                <input type={showPassword? "text": "password"} placeholder="Enter Your Password" />

              <div className="IconsAll">
                {
                  showPassword?
                  <IoEyeOutline onClick={()=>hidePasssword(!showPassword)} className="eyeIcon "/>
                  :                   
                  <IoEyeOffOutline onClick={()=>hidePasssword(!showPassword)} className="eyeIcon "/>
                }
              </div>
          </div>
        </div>
            {/*------------ Button Start */}
            <div className="SubmitBtn">
                  <button>Submit</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Register