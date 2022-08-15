import React from "react";
import { View, Text, SafeAreaView } from 'react-native';
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import SafeViewAndroid from "../styles/SafeViewAndroid";

const Home = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  )
}

export default Home;
