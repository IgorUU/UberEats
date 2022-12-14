import React, { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";
import SafeViewAndroid from "../styles/SafeViewAndroid";

const YELP_API_KEY =
  "H0BWn3C1WOC3Hjf1RByuvniAl2rrIpf_xLYe1WQwathXyfbPPWmpzVOu8QkIZbmcGHqA7XcaBRfNTPWHIqMTIT5E6yX_vnqdIlbXd9dqGL5xNFJm5EHC6zegJRr8YnYx";

const Home = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Chicago");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurants = () => {
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(url, apiOptions)
      .then((response) => response.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurants();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={2} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
