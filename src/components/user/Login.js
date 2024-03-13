import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import { useState } from "react";
import Register from "./Register";
export default function Login() {
  const userArray = [{user1:"murali",password:"Murali"}]
  // const [student, setStudent] = useState({ name: "", age: "" });
  // const [students, setStudents] = useState([]);

  ////button
  const { detail, setDetails ,students, setStudents,flag,setFlag} = useContext(UserContext);
  const [visible, setvisible] = useState(false);
  const addStudent = () => {
    detail.id = Date.now();
    setStudents((prevStudents) => [...prevStudents, detail]); //In React, it isn't allowed to change the original state array, so we can't use the push() method. We use the spread syntax (...) to unpack the elements of the existing array into a new array and add another value at the end.
    
    console.log(students.length)
    setDetails({ name: "", password: "" });
  };
  
  return (
    <div className="container">
      <div className="leftBox">
        <div className="title">Irish Cafe</div><br></br> <div className='tagLine'>Brewed with elegance, served with grace.</div>
      </div>
      <div className="rightBox">
        <div className="txtBox">
          {/* <input placeholder="Enter Username" autoFocus></input> */}
          <input
          type="text"
          value={detail.name}
          onChange={(e) =>
            setDetails((prevStudent) => ({
              ...prevStudent,
              ...{ name: e.target.value },
            }))
          }
          
          placeholder="Enter Name"
        ></input>
        </div>
        <div className="pwdEye">
          {/* <input
            type={visible ? "text" : "password"}
            placeholder="Enter Password"
          ></input> */}
          <input
          type={visible ? "text" : "password"}
          value={detail.password}
          onChange={(e) =>
            setDetails((prevStudent) => ({
              ...prevStudent,
              ...{ password: e.target.value },
            }))
          }
          placeholder="Enter Password"
        ></input>
          <span onClick={() => setvisible(() => !visible)}>
            {visible ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </span>
        </div>
        <div>
          {/* <button onClick={() => setuser((prev) => 1)}>Log in</button> */}
          <button onClick={addStudent}>Login</button>
        </div>
        <br></br>
        <div>Forgot Password?</div>
        <br></br>
        <div><button className="newAccBtn" onClick={()=>setFlag((prev)=>1)}>Create new account</button></div>
      </div>
    </div>
  );
}
