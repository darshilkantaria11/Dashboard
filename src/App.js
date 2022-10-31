import Navbar from "./js/Navbar";
import Overview from "./js/Overview";
import Partners from "./js/Partners";
import Widgets from "./js/Widgets";
import APIs from "./js/APIs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {
  return (
    <>
    <Router>
    <Navbar/>

    <Routes>
    <Route path="/" element={ <Overview/>}/>
    <Route path="/partners" element={ <Partners/>}/>
    <Route path="/widgets" element={ <Widgets/>}/>
    <Route path="/apis" element={ <APIs/>}/>
    
    </Routes>

    </Router>
    </>
  );
}

export default App;
