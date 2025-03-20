import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Basket from './components/basket';
import Products from './components/product';
import Login from './components/login';
import SignUp from './components/signUp';
import AddProduct from './components/addProduct';
import Footer from './components/footer';
import { CartProvider } from './components/cartContext';
import { ProductProvider } from './components/ProductContext';
import { LoginProvider, LoginContext } from './components/loginContext';
import { SignUpProvider } from './components/signUpContext';
import { AdminProvider } from './components/adminContext';
import { ProductListProvider } from './components/productListContext';
import ProductList from './components/productList';
import './output.css';
import './input.css';

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function Stats() {
  const { user } = useContext(LoginContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if(user.email === 'admin@gmail.com'&& user.password === 'admin'){
    return <Navigate to="/add-product" replace />;
  }
  return (
    <div className="flex justify-center  max-full-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-80">
        <h1 className="text-2xl font-bold text-gray-800">Hello, My Shop</h1>
        <p className="mt-4 text-gray-600">
          <span className="font-semibold">Account:</span> {user.email}
        </p>
        <p className="mt-2 text-lg font-semibold text-green-500">Payment: 100$</p>
        
      </div>
    </div>
  )
}

function AppLayout() {
  const { user, logout } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <nav style={{ margin: 10 }} className="bg-gray-800 p-4">
        <h1 className='text-white text-xl'>Monhoo</h1>
        <div className="flex place-content-center place-content-around">
          <Link className="text-white p-2 hover:bg-gray-400 rounded" to="/" style={{ padding: 5 }}>
            Home
          </Link>
          <Link className="text-white p-2 hover:bg-gray-400 rounded" to="/contact" style={{ padding: 5 }}>
            Contact
          </Link>
          <Link className="text-white p-2 hover:bg-gray-400 rounded" to="/about" style={{ padding: 5 }}>
            About
          </Link>
         
          <Link className="text-white p-2 hover:bg-gray-400 rounded" to="/products" style={{ padding: 5 }}>
            Products
          </Link>
          
          <span> | </span>
          {user && ( 
             <Link className="text-white p-2 hover:bg-gray-400 rounded" to="/stats">
            </Link>
          )}
          {!user && (
            <Link className="text-white p-2 hover:bg-gray-400 rounded" to="/login" style={{ padding: 5 }}>
               <img src="https://th.bing.com/th/id/R.47cecf6ce91d73af7900067efeaacb63?rik=%2btKMy%2fBRVLblKA&pid=ImgRaw&r=0.png" alt="user" style={{ width: 30, height:30 }} className='' />
            </Link>
          )}
        </div>
        {user && (
          <span onClick={handleLogout} style={{ padding: 5, cursor: 'pointer' }}>
            Logout
          </span>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer /> 
    </>
  );
}
function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <LoginProvider>
          <SignUpProvider>
            <AdminProvider>
              <ProductListProvider> 
                <Router>
                  <AppLayout />
                </Router>
              </ProductListProvider>
            </AdminProvider>
          </SignUpProvider>
        </LoginProvider>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;