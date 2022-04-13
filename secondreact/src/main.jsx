import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Header2 from './components/Header2';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header2 />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Hello World</h1>
            </div>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <div>
              <h1>About React</h1>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
