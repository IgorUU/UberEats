import LottieView from "lottie-react-native";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import SafeViewAndroid from "../styles/SafeViewAndroid";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function OrderCompleted() {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUsd = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {/* green checkmark */}
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text>
          Your order at {restaurantName} has been placed for {totalUsd}
        </Text>
        {/* menuItems */}
        <MenuItems restaurantName={restaurantName} hideCheckbox={true} />
        {/* cooking */}
        <LottieView
          style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
      </View>
    </SafeAreaView>
  );
}
