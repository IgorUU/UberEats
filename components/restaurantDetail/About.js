import React from "react";
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

const { name, yelp_image, price, reviews, rating, categories } =
  yelpRestaurantInfo;

const image =
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F03%2F29%2Fpasta-power-tout.jpg";

const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai · Comfort food · $$ · 🎫 · 4 ⭐ (2912+)";

const About = () => {
  return (
    <View>
      <RestaurantImage image_url={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
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

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontWeight: "bold",
      fontSize: 29,
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
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
