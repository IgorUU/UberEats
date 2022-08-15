import React from "react";
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";;

const SearchBar = () => {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10
          }
        }}
      />
    </View>
  )
}

export default SearchBar;
