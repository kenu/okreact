import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import MyPage from './pages/MyPage'
import AjaxTest from './pages/AjaxTest';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/ajaxtest" element={<AjaxTest />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
