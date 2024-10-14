
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout'
import Home from './components/Home';
import Login from './pages/Login';
import Employees from './components/Employees';
import Attendance from './components/Attendance';
import Departments from './components/Departments';
import Recruitment from './components/Recruitment';
import Performance from './components/Performance';
import EmployeeProfile from './components/EmployeeProfile';

function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/layout' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='employees' element={<Employees/>}/>
          <Route path='attendance' element={<Attendance/>}/>
          <Route path='departments' element={<Departments/>}/>
          <Route path='performance' element={<Performance/>}/>
          <Route path='recruitment' element={<Recruitment/>}/>
          <Route path='employee/:id' element={<EmployeeProfile/>}/>
        </Route>
        
      </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
