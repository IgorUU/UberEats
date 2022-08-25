import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image:
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F03%2F29%2Fpasta-power-tout.jpg",
  price: "$$",
  reviews: "1500",
  rating: 5,
  categories: [{ title: "Thai" }, { title: "Comfort food" }],
};

const About = (props) => {
  const { name, image_url, price, reviews, rating, categories } =
    props.route.params;
  const formatedCategories = categories.map((cat) => cat.title).join(" · ");

  const yelpDescription = `${formatedCategories} ${
    price ? " · " + price : ""
  }  · 🎫 · ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image_url={image_url} />
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
