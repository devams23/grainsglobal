import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// src/index.js or src/App.js

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Protected from "./Components/Protected.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Components/Layout.jsx";

import {
  HomePage,
  OurProductsPage,
  MyCartPage,
  ContactUsPage,
  AboutUsPage,
  LoginPage,
  SignUpPage,
  VerificationPage
} from "./Pages";

// App.js or index.js
import axios from "axios";

axios.defaults.withCredentials = true;

<Protected></Protected>;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="products/:selected" element={<OurProductsPage />} />

      <Route path="cart" element={<MyCartPage />} />

      <Route path="contact" element={<ContactUsPage />} />
      <Route path="about" element={<AboutUsPage />} />
      <Route path="verify" element={<VerificationPage />} />
      <Route
        path="login"
        element={
          <Protected authentication={false}>
            <LoginPage />
          </Protected>
        }
      />
      <Route
        path="signup"
        element={
          <Protected authentication={false}>
            <SignUpPage />
          </Protected>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
