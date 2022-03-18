import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Layout from "./Pages/Layout";
import CreateEmployee from "./Employee/CreateEmployee";
import Employee from './Employee/Employee';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Create Home Route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
        </Route>

        {/* Create Home Route */}
        <Route path="/add-employee" element={<Layout />}>
          <Route index element={<CreateEmployee />} />
        </Route>

         {/* Create Employee Route */}
        <Route path="/employee" element={<Layout />}>
          <Route index element={<Employee />} />
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
