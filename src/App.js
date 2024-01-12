
import { Stack } from '@mui/material';
import './App.css';
import Navbar from './layouts/Navbar';
import About from './layouts/About';
import Hero from './layouts/Hero';
import Services from './layouts/Services';

function App() {
  return (
    <div>
    <Stack>

      {/* Navbar */}

      <Navbar/>
    

      {/* Hero */}
      <Hero/>

      {/* About */}
      <About/>

      {/* Services */}
      <Services/>

    </Stack>
 
    </div>
  );
}

export default App;
