import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
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

const RestaurantItems = ({ navigation, ...props }) => {
  return props.restaurantData.map((restaurant, index) => (
    <TouchableOpacity
      key={index}
      activeOpacity={1}
      style={{ marginBottom: 30 }}
      onPress={() =>
        navigation.navigate("RestaurantDetail", {
          name: restaurant.name,
          image: restaurant.image_url,
          price: restaurant.price,
          reviews: restaurant.review_count,
          rating: restaurant.rating,
          categories: restaurant.categories,
        })
      }
    >
      <View
        style={{
          marginTop: 10,
          padding: 15,
          backgroundColor: "white",
        }}
      >
        {/* RestaurantImage */}
        <RestaurantImage image_url={restaurant.image_url} />
        {/* RestaurantInfo */}
        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
      </View>
    </TouchableOpacity>
  ));
};

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image_url,
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

const RestaurantInfo = ({ name, rating }) => (
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
        {name}
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
      <Text>{rating}</Text>
    </View>
  </View>
);

export default RestaurantItems;
