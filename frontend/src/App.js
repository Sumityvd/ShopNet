// import './App.css';
// import Header from "./component/layout/Header/Header.js"
// import { useEffect,useState } from "react";
// import {BrowserRouter as Router,Route,Routes, Switch} from "react-router-dom";
// import Footer from "./component/layout/Footer/Footer.js"
// import WebFont from "webfontloader"
// import React from "react";
// import Home from "./component/Home/Home.js";
// import ProductDetails from "./component/Product/ProductDetails.js"
// import Products from "./component/Product/Products.js";
// import Search from "./component/Product/Search.js";
// import LoginSignUp from './component/User/LoginSignUp.js';
// import store from "./store";
// import { loadUser } from "./actions/userAction";
// import axios from "axios";
// import UserOptions from "./component/layout/Header/UserOptions.js"
// import { useSelector } from 'react-redux';
// import Profile from "./component/User/Profile.js"
// import ProtectedRoute from './component/Route/ProtectedRoute.js';
// import UpdateProfile from "./component/User/UpdateProfile.js";
// import UpdatePassword from './component/User/UpdatePassword.js';
// import ForgotPassword from "./component/User/ForgotPassword.js";
// import  ResetPassword from './component/User/ResetPassword.js';
// import Cart from './component/Cart/Cart.js';
// import Shipping from "./component/Cart/Shipping.js";
// import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
// import Payment from "./component/Cart/Payment.js"; 
// import {Elements} from "@stripe/react-stripe-js";
// import { loadStripe } from '@stripe/stripe-js';
// import OrderSuccess from "./component/Cart/OrderSuccess.js";
// import MyOrders from "./component/Order/MyOrders.js";
// import OrderDetails from "./component/Order/OrderDetails.js";
// import Dashboard from "./component/admin/Dashboard.js";
// import ProductList from "./component/admin/ProductList.js";
// import NewProduct from "./component/Cart/NewProduct.js";
// import UpdateProduct from "./component/admin/UpdateProduct.js";
// import OrderList from "./component/admin/OrderList.js";
// import ProcessOrder from "./component/admin/ProcessOrder.js";
// import UsersList from "./component/admin/UsersList.js";
// import UpdateUser from "./component/admin/UpdateUser.js";
// import ProductReviews from "./component/admin/ProductReviews.js";

// function App() {

//   const {isAuthenticated,user} = useSelector((state) => state.user); 
//   const [stripeApiKey, setStripeApiKey] = useState("");

//   async function getStripeApiKey() {
//     const { data } = await axios.get("/api/v1/stripeapikey");

//     setStripeApiKey(data.stripeApiKey);
    
//   }
  
//   useEffect(() => {
//   WebFont.load({
//     google: {
//       families: ["Roboto", "Droid Sans", "Chilanka"],
//     },
//   });
//   store.dispatch(loadUser());
//   getStripeApiKey();
// }, []);

//   return (

// <Router>
//       <Header />
//         <Routes>
//         {/* {isAuthenticated && <UserOptions user={user}/>}
//         <Route exact path="/" element={<Home/>} />
//         <Route exact path="/product/:id" element={<ProductDetails/>}/>
//         <Route exact path="/products" element={<Products/>} />
//         <Route path="/products/:keyword" element={<Products/>}/>
//         <Route exact path="/search" element={<Search/>}/>
//         <Route exact path="/search" element={<Search/>}/>
//         <Route exact path="/account" element={<Profile/>} />
//         <Route exact path="/login" element={<LoginSignUp/>} /> */}

//         {isAuthenticated && <UserOptions user = {user}/>}
        
//         <Route exact path="/" component={Home} />
        
//         <Route exact path="/product/:id" component={ProductDetails} />
        
//         <Route exact path="/products" component={Products} />
        
//         <Route path="/products/:keyword" component={Products} />
        
//         <Route exact path="/search" component={Search} />
        
//         <ProtectedRoute exact path="/login" component={LoginSignUp}/>        

//         <ProtectedRoute exact path="/me/update" component={UpdateProfile}/>   

//         <ProtectedRoute exact path="/password/update" component={UpdatePassword}/>   

//         <Route exact path="/password/forgot" component={ForgotPassword}/>   

//         <Route exact path="/password/reset/:token" component={ResetPassword}/>   

//         <Route exact path="/cart" component={Cart}/>

//         <ProtectedRoute exact path="/shipping" component={Shipping}/>


//         {stripeApiKey && (
//           <Elements stripe={loadStripe(stripeApiKey)}>
//                 <ProtectedRoute exact path="/process/payment" component={Payment}/>
//           </Elements>
//         )}

//         <ProtectedRoute exact path="success" component={OrderSuccess}/>

//         <ProtectedRoute exact path="/orders" component={MyOrders} />

//         <Switch>

//               <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder}/>

//               <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

//         </Switch>

//         <ProtectedRoute isAdmin={true} exact path = "/admin/dashboard" component={Dashboard}/>

//         <ProtectedRoute
//           exact
//           path="/admin/products"
//           isAdmin={true}
//           component={ProductList}
//         />

//         <ProtectedRoute
//           exact
//           path="/admin/product"
//           isAdmin={true}
//           component={NewProduct}
//         />

//         <ProtectedRoute
//           exact
//           path="/admin/product/:id"
//           isAdmin={true}
//           component={UpdateProduct}
//         />
        
//         <ProtectedRoute
//             exactpath="/admin/orders"
//             isAdmin={true}
//             component={OrderList}
//         />

//         <ProtectedRoute
//             exactpath="/admin/order/:id"
//             isAdmin={true}
//             component={ProcessOrder}
//         />

//         <ProtectedRoute
//             exactpath="/admin/users"
//             isAdmin={true}
//             component={UsersList}
//         />

//         <ProtectedRoute
//             exactpath="/admin/user/:id"
//             isAdmin={true}
//             component={UpdateUser}
//         />

//         <ProtectedRoute
//             exactpath="/admin/reviews"
//             isAdmin={true}
//             component={ProductReviews}
//         />
//         {/* <Route
//           Component={window.location.pathname==="/process/payment" ? null : }
//         /> */}

//         </Routes>        
//         <Footer/>
//   </Router>
//   );
// }

// export default App;

import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/admin/Dashboard.js";
import ProductList from "./component/admin/ProductList.js";
import NewProduct from "./component/Cart/NewProduct";
import UpdateProduct from "./component/admin/UpdateProduct";
import OrderList from "./component/admin/OrderList";
import ProcessOrder from "./component/admin/ProcessOrder";
import UsersList from "./component/admin/UsersList";
import UpdateUser from "./component/admin/UpdateUser";
import ProductReviews from "./component/admin/ProductReviews";
// import Contact from "./component/layout/Contact/Contact";
// import About from "./component/layout/About/About";
// import NotFound from "./component/layout/Not Found/NotFound";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  // const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  //   const { data } = await axios.get("/api/v1/stripeapikey");

  //   setStripeApiKey(data.stripeApiKey);
  // }

  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: ["Roboto", "Droid Sans", "Chilanka"],
  //     },
  //   });

  //   store.dispatch(loadUser());

  //   // getStripeApiKey();
  // }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      {/* {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )} */}

      <Routes>


      <Route path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/search/" element={<Search />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/success" element={<OrderSuccess />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/order/confirm" element={<ConfirmOrder />} />
        <Route path="/order/:id" element={<ProtectedRoute component={OrderDetails} />} />
        <Route path="/me/update" element={<ProtectedRoute component={UpdateProfile} />} />
        <Route path="/password/update" element={<ProtectedRoute component={UpdatePassword} />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/account" element={<ProtectedRoute component={Profile} />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute isAdmin={true} component={Dashboard} />} />
        <Route path="/admin/products" element={<ProtectedRoute isAdmin={true} component={ProductList} />} />
        <Route path="/admin/product" element={<ProtectedRoute isAdmin={true} component={NewProduct} />} />
        <Route path="/admin/product/:id" element={<ProtectedRoute isAdmin={true} component={UpdateProduct} />} />
        <Route path="/admin/orders" element={<ProtectedRoute isAdmin={true} component={OrderList} />} />
        <Route path="/admin/order/:id" element={<ProtectedRoute isAdmin={true} component={ProcessOrder} />} />
        <Route path="/admin/users" element={<ProtectedRoute isAdmin={true} component={UsersList} />} />
        <Route path="/admin/user/:id" element={<ProtectedRoute isAdmin={true} component={UpdateUser} />} />
        <Route path="/admin/reviews" element={<ProtectedRoute isAdmin={true} component={ProductReviews} />} />
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />
{/* 
        <Route exact path="/contact" component={Contact} />

    <Route exact path="/about" component={About} /> */}

        {/* <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        /> 

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <Route exact path="/login" component={LoginSignUp} />

        <Route exact path="/cart" component={Cart} />

        <ProtectedRoute exact path="/shipping" component={Shipping} />

        <ProtectedRoute exact path="/success" component={OrderSuccess} />

        <ProtectedRoute exact path="/orders" component={MyOrders} />

        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />

        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />

        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />

        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />

        <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        /> */} 

        {/* <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;


