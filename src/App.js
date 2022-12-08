import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useTheme } from './hooks/useTheme';

import ColorPalette from './pages/Home/ColorPalette';

import './App.scss';

function App() {
  const {theme} = useTheme()

  return (
    <div className={`${theme}-mode App`}>
      <BrowserRouter>
        <Routes>
          <Route element={<ColorPalette/>} path='/' />
        </Routes>
        <footer>
        <a href="https://bilalakcan.netlify.app/" target="_blank"  rel="noreferrer"><span>Coded with ❤ by Bilal</span></a>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
