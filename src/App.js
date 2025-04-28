// import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Positivus from "./pages/Positivus/Positivus";
import Aboutus from "./pages/Aboutus/Aboutus";
import Services from "./pages/Services/Services";
import UseCases from "./pages/UseCases/UseCases"
import Pricing from "./pages/Pricing/Pricing";
import Blog from "./pages/Blog/Blog";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    {/* <UseCases /> */}



    <Routes>
    <Route path="/"       element={ <Positivus /> } />
    <Route path="/positivus"       element={ <Positivus /> }  />
    <Route path="/about"           element={ <Aboutus /> }  />
    <Route path="/services"        element={ <Services /> }  />
    <Route path="/usecases"        element={ <UseCases />}  />
    <Route path="/pricing"         element={ <Pricing /> }  />
    <Route path="/blog"            element={ <Blog /> }  />
    </Routes>
    </>
  )
};

export default App;
