
import React, { useContext } from 'react'
// import Home from './Home'
import { UserContext } from "../../App"
import "./Register.css"

export default function Register() {
    const {detail,setDetails,students,setStudents,flag,setFlag}=useContext(UserContext);
  return (
    
<>
    <div className='Register-model'>
    <div className='Register-model-content'>
    <div className="Rigister-header">
          <div className="Register-signup-title">Register</div>
          <div onClick={() => setFlag(() => 0)} className="close">
            &times;
          </div>
        </div>
    <input type='text' placeholder='UserName'></input><br></br>
    <input type='text' placeholder='PassWord'></input><br></br>
    <input type='text' placeholder='conPass'></input><br></br>
    <button >Submit</button>
    {/* onClick={() => setFlag((prevState) => 4)} */}
    </div>
    </div>
    </>
   
  )
}