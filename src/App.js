import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './Routes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.conponent;
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
      </div>
    </Router>


  );
}

export default App;
