import React from 'react';
import logo from './logo.svg';
import './Layout.css';
import Header from './Header/Header';
import Routing from './Routing/Routing';
import Footer from './Footer/Footer';

function Layout() {
  return (
    <div className="Layout">
       <header>
          <Header></Header>
       </header>
       <main>
          <Routing></Routing>
       </main>
       <footer>
           <Footer></Footer>
       </footer>
    </div>
  );
}

export default Layout;
