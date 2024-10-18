import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TransactionForm from './components/Transaction';
import TransactionList from './components/Transaction';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import MyProfile from './pages/My-Profile';

function App() {
  return (

    <>
    <Header></Header>

    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/MyProfile" element={<MyProfile/>} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/transactions" element={<TransactionList />} />
        {/* <Route path="/TransactionForm" element={<TransactionForm />} /> */}
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
