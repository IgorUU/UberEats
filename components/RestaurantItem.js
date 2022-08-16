import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000",
    categories: ["Caffe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Hambi Bar",
    image_url:
      "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg",
    categories: ["Caffe", "Bar"],
    price: "$$",
    reviews: 3200,
    rating: 4.3,
  },
  {
    name: "Street pizza",
    image_url:
      "https://thumbs.dreamstime.com/b/pizza-pepperoni-cheese-salami-vegetables-58914487.jpg",
    categories: ["Pizza"],
    price: "$",
    reviews: 1000,
    rating: 4,
  },
];

const RestaurantItem = () => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <View
        style={{
          marginTop: 10,
          padding: 15,
          backgroundColor: "white",
        }}
      >
        {/* RestaurantImage */}
        <RestaurantImage />
        {/* RestaurantInfo */}
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
};

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1920px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
      }}
      style={{
        width: "100%",
        height: 180,
      }}
    />
    <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        Farmhouse kitchen Thai Cuisine
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>35-45 · min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>4</Text>
    </View>
  </View>
);

export default RestaurantItem;
