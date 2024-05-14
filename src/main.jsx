import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import YourCart from './components/YourCart.jsx';
import store from './feature/store.js';
import { Provider } from 'react-redux'
import Layout from './components/Layout.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path='' element={<App/>}/>
        <Route path="your-cart" element={<YourCart />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
  <Router/>
  </Provider>
    <ToastContainer/>
    </>
)
