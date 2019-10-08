import React from 'react';
import {  View,Text } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

import { Provider } from 'react-redux';
import store from './store.js';
import ErrorBoundry from './components/error-boundry';
import { BookstoreServiceProvider } from './components/bookstore-service-context';
import { HomePage, CartPage } from './components/pages';
import BookstoreService from './services/bookstore-service';
import ShopHeader from './components/shop-header';

const bookstoreService = new BookstoreService();

const App = () => {
  return (
    <NativeRouter>
      <Provider store={store}>
        <ErrorBoundry>
          <BookstoreServiceProvider value={bookstoreService}>
            <View >
              <ShopHeader numItems={5} total={210} />
              
              </View>
              <Route 
                path='/'
                component={HomePage}
                exact />
					    <Route 
                path='/cart'
                component={CartPage}
                />   
          </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>
    </NativeRouter>     
  );
};

export default App;
