import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import UserForm from './components/userform';

function App() {
  return (
    <Router>
    <div>
      <Header />
    </div>

      <Routes>
          {/* <Route path="/userlist" element={<CardList />} /> */}
          <Route path="/userform" element={<UserForm />} />
          {/* <Route path="/colleges" element={<CollegeList />} /> */}

          {/* <Route path={"*"} element={<Navigate replace to="/userlist" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
