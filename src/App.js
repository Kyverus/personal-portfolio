import logo from './logo.svg';
import './App.css';
import { Banner } from './components/Banner/Banner';
import { NavBar } from './components/NavBar/NavBar';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
