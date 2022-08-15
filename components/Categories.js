import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: 'Pick-up'
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: 'Soft Drinks'
  },
  {
    image: require("../assets/images/bread.png"),
    text: 'Bakery Items'
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: 'Fast Food'
  }
];

const Categories = () => {
  return (
    <View>
      <Image source={items[0].image} style={{
        width: 50,
        height: 40,
        resizeMode: "contain",
      }}/>
    </View>
  )
}

export default Categories;
