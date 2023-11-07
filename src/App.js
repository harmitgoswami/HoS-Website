import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './pages/Home.js';
import About from './pages/About.js';
import Events from './pages/Events.js';
import Execs from './pages/Execs.js';
import Contact from './pages/Contact.js';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className='bg-HOSorange'>

        <div className='grid grid-cols-4 py-12'>

          <NavBar className='col-span-1'/>

          <div className='col-span-3'>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/execs" element={<Execs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

        </div>
    </div>
  );
}

export default App;




