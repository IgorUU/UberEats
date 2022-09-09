import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ViewCart = (navigation, ...props) => {
  console.log(props);
  return (
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
            marginTop: 20,
            padding: 13,
            borderRadius: 30,
            alignItems: "center",
            width: 300,
            backgroundColor: "black",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewCart;
