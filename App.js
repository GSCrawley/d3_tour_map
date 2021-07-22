import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Map from "./components/Map";

export default function App() {
  const dimensions = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <Map
            dimensions={dimensions}
         />
      </View>
   );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
