import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import OptionSwitcher from './Components/Maps';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "info",
    element: <OptionSwitcher/>,
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)
