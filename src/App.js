import GlobalContextProvider from './context/GlobalContext';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ContactPage from './pages/ContactPage';
import WorksPage from './pages/WorksPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
