
import {Routes,Route} from 'react-router-dom'
import HomePage from './Routes/HomePage';
import Project from './Routes/Project';
import About from './Routes/About';
import Contact from './Routes/Contact';
import './index.css'


function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>

    
   </Routes>
   </>
  );
}

export default App;
