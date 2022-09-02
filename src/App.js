import {
  BrowserRouter, 
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/home.js"
import List from "./pages/list/list.js"
import Hotel from "./pages/hotel/hotel.js"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/hotels' element={<List/>}/>
          <Route path ='/hotel/:id' element={<Hotel/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
