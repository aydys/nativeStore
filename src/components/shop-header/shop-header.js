import React from 'react';
import { Link } from "react-router-native";
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

// import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
  return (
    <View style={{
      flexDirection: 'row',
      height: 100,
      padding: 20,
      justifyContent: 'space-between'
    }}>
      <Link to='/'>
        <Text style={{
          alignSelf: 'center',
          fontSize: 32
        }}>ReStore</Text>
      </Link>
      <Link to='/cart'>
        <Text>
          <Icon name='shopping-cart' size={30} color='#900' />
          {numItems} items (${total})
        </Text>
      </Link>
    </View>
  )
};

export default ShopHeader;