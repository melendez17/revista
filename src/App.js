import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import topic1 from './pages/topic1';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/topic1" exact Component={topic1} />
      </Routes>
    </Router>
  );
}

export default App;
