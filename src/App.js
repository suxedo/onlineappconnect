import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import useWindowSize from "./utils/useWindowSize";
import Header from './Header';
import HomePhone from './HomePhone';
import Qrcode from './components/Qrcode';

function App() {

  const { width } = useWindowSize();

  function getRandomInt() {
    return Math.floor(Math.random() * 1000000);
  }
  return (
    <div className="App">
      <Routes>
            <Route
              exact
              path="/"
              element={
                
                <div>
                   {width < 770 ? <div>
                     <Header/>
                    <HomePhone/>
                
                    
                  </div> : <div>
                    <Header/>
                  <Home/>
                    
                  </div>}
                 
                  
                    
                  
                
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
    
    </div>
  );
}

export default App;
