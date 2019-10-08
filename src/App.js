import React from 'react';
import {  View,Text } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

import { Provider } from 'react-redux';
import store from './store.js';
// import transform from 'css-to-react-native';
import { HomePage, CartPage } from './components/pages';
import ShopHeader from './components/shop-header';

const App = () => {
  return (
    <NativeRouter>
      <Provider store={store}>
      <View>
        <ShopHeader numItems={5} total={210} />
          <Route 
            path='/'
            component={HomePage}
            exact />
					<Route 
            path='/cart'
            component={CartPage}
            />
      </View>      
    </Provider>
    </NativeRouter>     
  );
};

export default App;
