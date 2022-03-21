import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App'
import Layout from "./Pages/Layout"
import CreateEmployee from "./Employee/CreateEmployee"
import CreateTimeOff from "./TimeOff/CreateTimeOff"
import Employee from './Employee/Employee'
import reportWebVitals from './reportWebVitals'
import TimeOff from './TimeOff/TimeOff'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* View Home Route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
        </Route>

        {/* Create Employee Route */}
        <Route path="/add-employee" element={<Layout />}>
          <Route index element={<CreateEmployee />} />
        </Route>

         {/* View Employee Route */}
        <Route path="/employee" element={<Layout />}>
          <Route index element={<Employee />} />
        </Route>

        {/* View Time off Route */}
        <Route path="/time-off" element={<Layout />}>
          <Route index element={<TimeOff />} />
        </Route>

        {/* View Time off Route */}
        <Route path="/create-time-off" element={<Layout />}>
          <Route index element={< CreateTimeOff />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
