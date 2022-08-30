import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomTabs = () => {
  const iconsData = [
    ["home", "Home"],
    ["search", "Browse"],
    ["shopping-bag", "Grocery"],
    ["list", "Orders"],
    ["user", "Account"],
  ];

  return (
    <View
      style={{
        margin: 10,
        marginHorizontal: 30,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {iconsData.map((ikona, key) => (
        <Icon key={key} icon={ikona[0]} text={ikona[1]} />
      ))}
    </View>
  );
};

const Icon = (props) => (
  <TouchableOpacity>
    <View
      key={props.index}
      style={{
        alignItems: "center",
      }}
    >
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

export default BottomTabs;
