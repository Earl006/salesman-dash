import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserManagement from './pages/UserManagement';
import Clients from './pages/Clients';
import Products from './pages/Products';
import TaskManagement from './pages/TasksManagement';
import VisitsPlanning from './pages/VisitsPlanning';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
     
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage-clients" element={<Clients />} />
          <Route path="/manage-users" element={<UserManagement />} />
          <Route path="/products" element={<Products />} />
          <Route path='/tasks' element={<TaskManagement/>}/>
          <Route path='/visits' element={<VisitsPlanning/>}/>


        </Routes>
      </div>
    </Router>
  );
}

export default App;