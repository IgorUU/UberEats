import React from "react";
import { View, Text, SafeAreaView } from 'react-native';
import HeaderTabs from "../components/HeaderTabs";
import SafeViewAndroid from "../styles/SafeViewAndroid";

const Home = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <HeaderTabs />
    </SafeAreaView>
  )
}

export default Home;
