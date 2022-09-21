import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

export default function OrderCompleted(props) {

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
    <View>
      <Text>Your order at {restaurantName} has been placed for {totalUsd}</Text>
    </View>
  )
}
