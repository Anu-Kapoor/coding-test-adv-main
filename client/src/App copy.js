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
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;



import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import NotFound from './components/pages/NotFound';

import RootLayout from './components/pages/Root';

const router=createBrowserRouter([
  {path:'/', 
  element:<RootLayout />,
  errorElement:<NotFound/>,
   children:[
    {path:'/', element:<Home />},
    {path:'/admin', element: <Admin/>}
  ]},
 
])
function App() {
  return (

      
        <RouterProvider router={router}/>
       
      

  );
}

export default App;


 //{/*<Layout> <Routes>
 //         <Route path='/' element={<Navigate to="/home" />} />
 //         <Route path='/home' element={<Home />} />
 //         <Route path='/admin' element={<Admin />} />
   //       <Route path='/*' element={<NotFound />} />
     //   </Routes> </Layout> */}
