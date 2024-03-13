import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext, createContext, useState } from "react";
import Products from "./components/product/Products.js";
import Cart from "./components/cart/Cart.js";
import Navbar from "./components/navbar/Navbar.js";
import Login from "./components/user/Login.js";
import { AppContextProvider } from "./context/appContext.js";
import Logout from "./components/user/Logout.js";
import Footer from "./components/footer/Footer.js"
import Register from "./components/user/Register.js";

export const UserContext = createContext(null);
function App() {
  const [user, setuser] = useState(0);
  const [pass, setpass] = useState(0);
  const [flag, setFlag] = useState(0);
  const [detail, setDetails] = useState({ name: "", password: "" });
  const [students, setStudents] = useState([]);
  // const val = { user, setuser,pass,setpass };
  // const val2 = {pass,setpass}
  return (
    <div className="App">
      <UserContext.Provider value={{detail,setDetails,students,setStudents,flag,setFlag}}>
        {!flag ? (
          <Login />
        ) : (<Register/>
          // <AppContextProvider>
          //   <Router>
          //     <Navbar />
          //     <hr></hr>
          //     <Routes>
          //       <Route path="/" index element={<Products />} />
          //       <Route path="/cart" element={<Cart />} />
          //     </Routes>
          //     <Footer/>
          //   </Router>
          // </AppContextProvider>
        )}
      </UserContext.Provider>
    </div>
  );
}
export default App;
