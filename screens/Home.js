import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";
import SafeViewAndroid from "../styles/SafeViewAndroid";

const YELP_API_KEY =
  "H0BWn3C1WOC3Hjf1RByuvniAl2rrIpf_xLYe1WQwathXyfbPPWmpzVOu8QkIZbmcGHqA7XcaBRfNTPWHIqMTIT5E6yX_vnqdIlbXd9dqGL5xNFJm5EHC6zegJRr8YnYx";

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  const getRestaurants = () => {
    const url =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood";

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(url, apiOptions)
      .then((response) => response.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
