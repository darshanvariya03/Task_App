import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import View from './Pages/View';
import './style.css'
import Add from './Pages/Add';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<View/>} />
      <Route path='/add' element={<Add/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;