import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CheckParam from './CheckParam';
import FancyCheck from './FancyCheck';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/home' element={<h1>Welcome</h1>} />
          <Route path='/:check' element={<CheckParam />} />
          <Route path='/:word/:textColor/:bgColor' element={<FancyCheck />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
