import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Jobs from './Pages/Jobs/Jobs.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Errorpage from './Pages/Errorpage/Errorpage.jsx';
import Jobdetails from './Component/Jobdetails/Jobdetails.jsx';
import Appliedjobs from './Pages/appliedJobs/Appliedjobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/jobs",
        element:<Jobs></Jobs>,
      },
      {
        path: "/applied-jobs",
        element:<Appliedjobs></Appliedjobs>,
        loader: ()=>fetch('jobs.json'),
      },
      {
        path: "/blogs",
        element:<Blogs></Blogs>,
      },
      {
        path: "/contact",
        element:<Contact></Contact>,
      },
      {
        path: "/job/:id",
        element:<Jobdetails></Jobdetails>,
        loader: ()=>fetch('jobs.json'),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
