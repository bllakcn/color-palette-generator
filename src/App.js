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
      </BrowserRouter>
    </div>
  );
}

export default App;
