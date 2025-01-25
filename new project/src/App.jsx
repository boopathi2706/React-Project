import "./App.css";
import About from "./Components/About";
import ClassComponents from "./Components/ClassComponents";
import Demo from "./Components/Demo";
import Home from './Components/Home';
import Gallery from "./Components/Gallery";
import UseState from "./Components/Hooks/UseState";
import Navbar_day8 from "./Components/Navbar_day8";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from './Components/Login_day8';
import UseEffect from "./Components/Hooks/UseEffect";
import UseEffectAPI from "./Components/Hooks/UseEffectAPI";
import UseReducer from "./Components/Hooks/UseReduce";
import UseRef from "./Components/Hooks/UseRef";
import UseMemo from "./Components/Hooks/UseMemo";
import UseCallBack from "./Components/Hooks/UseCallBack";
import Usecontext from "./Components/Hooks/UseContext";
import LazyLoadingWithSuspence from "./Components/Memoization/LazyLoadingWithSuspence";
import UseLocalStorage from "./Components/Hooks/CustomHooks/UseLocalStorage";
import HoC from "./Components/HoC/HoC";
function App() {
  return (
    <BrowserRouter>
     <Navbar_day8 />
     
      <Routes>
         {/* <Route path='/' element={<Navbar_day8 />}></Route> */}
         <Route path="/" element={<Home />}></Route>
         <Route path='/login' element={<Login />}></Route>
         <Route path='/about' element={<About />}></Route>
         <Route path='/gallery' element={<Gallery />}></Route>
         <Route path='/use- bstate' element={<UseState />}></Route>
         <Route path='/classComponents' element={<ClassComponents />}></Route>
         <Route path='/demo' element={<Demo />}></Route>
         <Route path='/use-effect' element={<UseEffect />}></Route>
         <Route path='/use-effect-api' element={<UseEffectAPI />}></Route>
         <Route path='/use-reducer' element={<UseReducer />}></Route>
         <Route path='/use-ref' element={<UseRef />}></Route>
         <Route path='/use-memo' element={<UseMemo />}></Route>
         <Route path='/use-callback' element={<UseCallBack />}></Route>
         <Route path='/use-context' element={<Usecontext />}></Route>
         <Route path='/use-storage' element={<UseLocalStorage />}></Route>
         <Route path='/hoc' element={<HoC />}></Route>
         <Route path='/lazy' element={<LazyLoadingWithSuspence />}></Route>


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
