import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ProductPage from './pages/ProductPage';

import GlobalStyle from './styles/GlobalStyle';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Header />
                <Home />

              </>
            )}
          />
          <Route
            path="/checkout"
            element={(
              <>
                <Header />
                <Checkout />
              </>
            )}
          />
          <Route
            path="/product/:id"
            element={(
              <>
                <Header />
                <ProductPage />
              </>
            )}
          />
          <Route
            path="/register"
            element={(
              <>
                <Register />
                <ToastContainer autoClose={3000} className="toast-container" />
              </>
        )}
          />
          <Route
            path="/login"
            element={(
              <>
                <Login /><ToastContainer autoClose={3000} className="toast-container" />
              </>
        )}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
