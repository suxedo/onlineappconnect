import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import useWindowSize from "./utils/useWindowSize";
import Header from './Header';

function App() {

  const { width } = useWindowSize();
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
                    <Home/>
                
                    
                  </div> : <div>
                    <Header/>
                  <Home/>
                    
                  </div>}
                 
                  
                    
                  
                
                </div>
              }
            />
           
    
      </Routes>
    
    </div>
  );
}

export default App;
