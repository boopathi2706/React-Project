import "./App.css";
import About from "./Components/About";
import ClassComponents from "./Components/ClassComponents";
import Demo from "./Components/Demo";
import Gallery from "./Components/Gallery";
import PropsCode from "./Components/PropsCode";
import UseState from "./Components/Hooks/UseState";
import EventHandling from "./Components/Event_handling_day8";
import Navbar_day8 from "./Components/Navbar_day8";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from './Components/Login_day8';
import UseEffect from "./Components/Hooks/UseEffect";
import UseEffectAPI from "./Components/Hooks/UseEffectAPI";
import UseReducer from "./Components/Hooks/UseReduce";
function App() {
  return (
    <BrowserRouter>
     <Navbar_day8 />
     
      <Routes>
         {/* <Route path='/' element={<Navbar_day8 />}></Route> */}
         <Route path='/login' element={<Login />}></Route>
         <Route path='/about' element={<About />}></Route>
         <Route path='/gallery' element={<Gallery />}></Route>
         <Route path='/use- bstate' element={<UseState />}></Route>
         <Route path='/classComponents' element={<ClassComponents />}></Route>
         <Route path='/demo' element={<Demo />}></Route>
         <Route path='/use-effect' element={<UseEffect />}></Route>
         <Route path='/use-effect-api' element={<UseEffectAPI />}></Route>
         <Route path='/use-reducer' element={<UseReducer />}></Route>
         <Route path='/login' element={<Login />}></Route>

      </Routes>
      

      {/* <section>
        <Navbar_day8 />
        
        <About />
        <hr />
        <Demo image="sece logo" page="gallery" />
        <hr />
        <ClassComponents /> <hr />
        <br />
        <Gallery />
        <hr />
        <PropsCode title="Profile" name="Boopathi" />
        <hr />
        <UseState />
        <hr />
        <EventHandling />
        </section> */}


    </BrowserRouter>
  );
}

export default App;
