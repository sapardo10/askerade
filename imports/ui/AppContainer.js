import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
//import Home from "./Home";
import App from "./App";
import Header from "./Header";
/*
import Search from "./Search";
import Products from "./Products";
import Trades from "./Trades";
*/

class AppContainer extends Component {
  render() {
    return (
		  <div>
        <Header />
        <main>
          <Switch>
          {
            /*
            <Route exact path='/jugar' component={Home}/>

            <Route path='/search' component={Search}/>
            <Route path='/products' component={Products}/>
            <Route path='/trades' component={Trades}/>

            */
          }
            <Route exact path ='/' component={App}/>

            
          </Switch>
        </main>
      </div>
    );
  }
}

export default AppContainer;