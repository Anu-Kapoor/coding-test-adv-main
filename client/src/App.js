import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';

import Home, { loader as picsLoader, CategoryLoader as CategoryLoader } from './components/pages/Home';
import { checkAuthLoader, tokenLoader } from './util/auth';
import RootLayout from './components/pages/Root';
import EventsRootLayout from './components/pages/EventsRoot';

import ErrorPage from './components/pages/Error';
import HomePage from './components/pages/HomePage';
import NotFound from './components/pages/NotFound';
import AuthenticationPage, {
  action as authAction,
} from './components/pages/Authentication';
import { action as manipulateEventAction } from './components/EventForm';
import { action as logoutAction } from './components/pages/Logout';

import NewEventPage from './components/pages/NewEvent';


import AddButton from './components/pages/AddButton';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children:[
         { index: true,
            element: <Home />,
            loader: picsLoader,
          },
          {
            path: 'new',
            element: <NewEventPage />,
        action: manipulateEventAction,
        loader: picsLoader,
          },  
        //   {
        //     path: 'eventId',
        //     id: 'event-detail',
        //     loader: eventDetailLoader
        //     element: <EventDetailPage />,
        // action: deleteEventAction,
       
        //   },     
        ],
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
      
    ]
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;