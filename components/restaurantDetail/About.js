import React from "react";
import { Text, View, Image } from "react-native";

const About = (props) => {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;
  const formatedCategories = categories.map((cat) => cat.title).join(" · ");

  const yelpDescription = `${formatedCategories} ${
    price ? " · " + price : ""
  }  · 🎫 · ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image_url={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={yelpDescription} />
    </View>
  );
};

const RestaurantImage = (props) => (
  <Image
    source={{
      uri: props.image_url,
    }}
    style={{
      width: "100%",
      height: 180,
    }}
  />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontWeight: "bold",
      fontSize: 29,
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);

export default About;
