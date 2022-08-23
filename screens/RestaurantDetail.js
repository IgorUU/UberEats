import React from "react";
import { Text, View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";

const RestaurantDetails = () => {
  return (
    <View>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
};

export default RestaurantDetails;
