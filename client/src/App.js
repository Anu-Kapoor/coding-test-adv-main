import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import NotFound from './components/pages/NotFound';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} loader={()=>{}} />
          <Route path='/home' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
