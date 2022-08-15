import React from "react";
import { View, Text } from 'react-native';
import { TouchableOpacity } from "react-native";

const HeaderTabs = () => {
  return (
    <View style={{
      flexDirection: "row", alignSelf: "center"
    }}>
      <HeaderButton text="Delivery" />
      <HeaderButton text="Pickup" />
      {/* HeaderButton */}
    </View>
  )
}

const HeaderButton = (props) => {
  return (
      <TouchableOpacity style={{
        backgroundColor: "black",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30
      }}>
        <Text style={{
          color: "white", fontSize: 15, fontWeight: '900'
        }}>{props.text}</Text>
      </TouchableOpacity>
  )
}

export default HeaderTabs;
