import React from 'react';
import { Link } from "react-router-native";
import { View, Text } from 'react-native';

// import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
  return (
    <View className='shop-header row'>
      <Link to='/'>
        <Text className='logo text-dark'>ReStore</Text>
      </Link>
      <Link to='/cart'>
          <Text>Test</Text>
        {/* <div className='shopping-cart'>
          <i className='cart-icon fa fa-shopping-cart' />
          {numItems} items (${total})
        </div> */}
      </Link>
    </View>
  )
};

export default ShopHeader;