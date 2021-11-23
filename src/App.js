import './App.css';
import MenuDashboard from './components/MenuDashboard';
import WordsList from './components/WordsList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <>
        <Routes>
          <Route path='/' element={<MenuDashboard />} />
          <Route path='/words' element={<WordsList />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
