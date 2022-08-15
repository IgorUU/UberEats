import React from "react";
import { View, Text, SafeAreaView } from 'react-native';
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
    </SafeAreaView>
  )
}

export default Home;
