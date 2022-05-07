
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import useWindowSize from "./utils/useWindowSize";
import Header from './Header';

import Qrcode from './components/Qrcode';


function App() {

  const { width } = useWindowSize();

  function getRandomInt() {
    return Math.floor(Math.random() * 1000000);
  }
  return (
    <div className="App">
      <Router>
      <Routes>
            <Route
              exact
              path="/"
              element={
                
                <div className='ho'>  
                 
                    <Header/>
                  <Home/>
                    
                 
                 
                  
                    
                  
                
                </div>
              }
            />
                <Route
              exact
              path="/qrcode"
              element={
                
                <div>
                   {width < 770 ? <div>
                  <Qrcode text={getRandomInt()}  ran='1234354'/>
                
                    
                  </div> : <div>
                    <Qrcode text={getRandomInt()} ran='32434'/>
                    
                  </div>}
                 
                  
                    
                  
                
                </div>
              }
            />
           
    
      </Routes>
    

      </Router>
     
    </div>
  );
}

export default App;
