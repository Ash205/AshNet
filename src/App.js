import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from './Nav';
import Cards from './Cards';
import Home from './routes/Home';
import About from './routes/About';
import {getData} from './data';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Navigation />
    </BrowserRouter>
  );
}

const Navigation = ()=>{
  let data = getData();
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/games' element={<Cards games={data["gamesData"]}/>} />
      <Route path='/projects' element={<Cards games={data["projData"]}/>} />
      <Route path='/about' element={<About/>} />
      <Route path='*' element={<Navigate to='/'/>} />
    </Routes>
  )
}

export default App;
