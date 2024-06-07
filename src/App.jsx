import React from 'react';
import Navbar from '../src/Components/Navigation_Bar/Navbar';
import Footer from '../src/Components/Footer/Footer';

import CartPage from './Components/CartPage/CartPage';
import { OurProductsPage } from './Pages';
const App = () => {
  return (
    <div>
      {/* <Navbar />

      <Footer /> */}
      <OurProductsPage/>
    </div>
  );
};

export default App;
