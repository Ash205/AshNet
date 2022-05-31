import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from './Nav';
import Games from './routes/Games.js';
import Projects from "./routes/Projects.js";
import Home from './routes/Home';
import About from './routes/About';
import {getData} from './data';
import Click from './routes/Games/Click';

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
      <Route key='1' path='/' element={<Home/>} />
      <Route key='2' path='/games' element={<Games data={data["gamesData"]}/>} />
      <Route key='3' path='/projects' element={<Projects data={data["projData"]}/>} />
      <Route key='4' path='/about' element={<About/>} />
      <Route key='5' path='/games/click' element={<Click/>} />
      <Route key='6' path='*' element={<Navigate to='/'/>} />
    </Routes>
  )
}

export default App;