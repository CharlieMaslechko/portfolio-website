import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { DarkLightModeContextProvider } from './DarkLightContext';

import { HomePage } from "./components/HomePage"
import { AboutMePage } from './components/AboutMePage';
import { ProjectsPage } from "./components/ProjectsPage"
import { AthleticsPage } from './components/AthleticsPage';
import { NavBar } from './components/NavBar';



function App() {
  return (
    <DarkLightModeContextProvider>
      <Router>
        <div>
          <NavBar /> {/* Display the NavBar component */}
          <Routes>
            <Route path="/" element={<HomePage/>} /> {/* Route to the HomePage component */}
            <Route path="/about" element={<AboutMePage/>} /> {/* Route to the AboutMePage component */}
            <Route path="/projects" element={<ProjectsPage/>} /> {/* Route to the AthleticsPage component */}
            <Route path="/athletics" element={<AthleticsPage/>} /> {/* Route to the AthleticsPage component */}
          </Routes>
        </div>
      </Router>
    </DarkLightModeContextProvider>
  );
}

export default App;
