import React from "react";
import { View, Text } from 'react-native';
import { TouchableOpacity } from "react-native";

const HeaderTabs = () => {
  return (
    <View>
      <HeaderButton text="Delivery" />
      <HeaderButton text="Pickup" />
      {/* HeaderButton */}
    </View>
  )
}

const HeaderButton = (props) => {
  return (
    <View>
      <TouchableOpacity>
        <Text>{props.text}</Text>
      </TouchableOpacity>
    </View>

  )
}

export default HeaderTabs;
