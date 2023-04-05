import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Cart from './Pages/Cart'



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
