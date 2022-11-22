import { Routes, Route, BrowserRouter } from 'react-router-dom'

import ColorPalette from './pages/Home/ColorPalette';

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ColorPalette/>} path='/' />
        </Routes>
        <footer>
          <span>Coded with ❤ by <a href="https://bilalakcan.netlify.app/" target="_blank"  rel="noreferrer">Bilal</a></span>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
