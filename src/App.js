
import react, {useEffect} from "react"
import './App.css';
import Header from  "./Header"
import Home from "./Home"
import {BrowserRouter,Routes,Route}
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51MeUVYSIOh9BXsnps2kmJuwnqG00eLDLa39xN7tT43G4aZw4wyj8x9cN8HfTG5VLO2qsOkdvJiX568cTTFYbdd9X00nL7IMHkR");


function App() {
  const [{},dispatch]= useStateValue();
  useEffect(()=>{

    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>> ",authUser);
      if(authUser){
        dispatch({
          type:"SET_USER",
          user: authUser
        })
      }
      else{

        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })

  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<div><Header/><Home/></div>}/>
        <Route path="/Checkout" element={<div><Header/><Checkout/></div>}/>
        <Route path ="/Login" element={<Login/>}/>
        <Route path ="/Payment" element ={<div><Header/>
        <Elements stripe ={promise}><Payment/></Elements></div>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
