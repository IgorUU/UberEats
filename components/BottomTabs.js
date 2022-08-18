import React from "react";
import { View, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const BottomTabs = () => {
  return (
    <View
      style={{
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          alignSelf: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome name="home" size={30} />
        <Text>Home</Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <FontAwesome name="search" size={30} />
        <Text>Browse</Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <FontAwesome name="shopping-bag" size={30} />
        <Text>Grocery</Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <FontAwesome name="list" size={30} />
        <Text>Orders</Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <FontAwesome name="user-o" size={30} />
        <Text>Account</Text>
      </View>
    </View>
  );
};

export default BottomTabs;
