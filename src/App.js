import {Navigate, Route, Routes} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import About from "./components/about-us/About";
// import DetailsPage from "./components/details-page/DetailsPage";
// import NotFound from "./components/not-found/NotFound";
// import Programmers from "./components/Programmers";
// import Drivers from "./components/Drivers";
 import React from "react";
// import useLocalStorage from './hooks/useLocalStorage';

function App() {

    //const [name, setName] = useLocalStorage("name", "");

    return (
        <div className="App">
            <Navbar/>
            {/* <input type='text' value={name} onChange={(event)=> setName(event.target.value) } /> */}
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Products/>}/>
                {/* <Route path='/products/:id' element={<DetailsPage/>}/> */}
                <Route path='/about-us/*' element={<About/>}>
                    {/* <Route path="programmers" element={<Programmers/>}/>
                    <Route path="drivers" element={<Drivers/>}/> */}
                </Route>
                {/* <Route path='/not-found' element={<NotFound/>}/> */}
                <Route path='/*' element={ <Navigate to='not-found' /> }/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
