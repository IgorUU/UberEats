import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const ViewCart = () => {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUsd = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 30,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                position: "relative",
                flexDirection: "row",
                justifyContent: "flex-end",
                marginTop: 20,
                padding: 15,
                borderRadius: 30,
                alignItems: "center",
                width: 300,
                backgroundColor: "black",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 45 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalUsd}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewCart;
