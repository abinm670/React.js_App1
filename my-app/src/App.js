import React, { Component } from 'react';

import {Route} from 'react-router-dom';
import HeaderApp from './components/HeaderApp.js';
import UserBrowser from './containers/UserBrowser.js';
import CompanyBrowser from './containers/CompanyBrowser.js';
import SingleUserStock from './containers/SingleUserStock.js';
import SingleUser from './containers/SingleUser.js';
import Home from './containers/Home.js';
import SingleStock from './containers/SingleStock.js';
import AboutUs from './containers/AboutUs.js';
import Stocks from './containers/Stocks.js';
// eslint-disable-next-line 
// eslint-disable-next-line 
import logo from './logo.svg'
import './App.css';




class App extends Component {
  render() {
    return (
      <div>
      <HeaderApp />
      <main >
<Route path="/" exact component={Home} />
<Route path="/home" exact component={Home} />
<Route path="/users" exact component={UserBrowser} />
<Route path="/companies" exact component={CompanyBrowser} />
<Route path="/portfolio/:name" exact component={SingleUserStock} />
<Route path="/user/:id" exact component={SingleUser} />
<Route path="/singleStock/:name" exact component={SingleStock}/>
<Route path="/about/" exact component={AboutUs}/>
<Route path="/stocks/" exact component={Stocks}/>
</main>
</div>
    );
  }
}

export default App;
