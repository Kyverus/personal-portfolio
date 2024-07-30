import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import {ProjectsListPage} from './pages/ProjectListPage';
import {ProjectPage} from './pages/ProjectPage';
import {NotFoundPage} from './pages/NotFoundPage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="page-body">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsListPage />}/>
              <Route path="/projects/:projectId" element={<ProjectPage />}/>
              <Route path="*" element={<NotFoundPage />}/>
            </Routes>
          </div> 
      </div>  
    </BrowserRouter>

  );
}

export default App;
