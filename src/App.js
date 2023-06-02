import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skill from './components/Skill';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
    </div>
  );
}

export default App;
