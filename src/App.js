import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './global.scss';
import Billing from './pages/Billing';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Billing />} />
      </Routes>
    </Router>
  );
}

export default App;
