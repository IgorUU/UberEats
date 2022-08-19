import React from "react";
import { Text, View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";

const RestaurantDetails = () => {
  return (
    <View>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
    </View>
  );
};

export default RestaurantDetails;
