import './App.css';
import Prenavbar from './components/Prenavbar';
import Navbar from './components/Navbar'
import { BrowserRouter as Router} from 'react-router-dom';
import Slider from './components/Slider.js'
import data from './Data/data.json'
import Offers from './components/Offers.js'



function App() {
  return (
    <Router>
        <Prenavbar />
        <Navbar />
        <Slider  start={data.banner.start}/>
        <Offers offer={data.offer}/>    
    </Router>    
  );
}

export default App;
