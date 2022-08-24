import { useRoute } from "@react-navigation/native";
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

const About = (props) => {
  const YELP_API_KEY =
    "H0BWn3C1WOC3Hjf1RByuvniAl2rrIpf_xLYe1WQwathXyfbPPWmpzVOu8QkIZbmcGHqA7XcaBRfNTPWHIqMTIT5E6yX_vnqdIlbXd9dqGL5xNFJm5EHC6zegJRr8YnYx";

  const restaurantId = props.route.params.restaurantId;
  const url = `https://api.yelp.com/v3/businesses/${restaurantId}`;
  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  };

  return fetch(url, apiOptions)
    .then((response) => response.json())
    .then((json) => {
      const { name, image_url, price, reviews, rating, categories } = json;
      console.log(name);
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
    });
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
