import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";

const DetailScreen = ({ route }) => {
  const { placeId } = route.params;
  const place = useSelector((state) =>
    state.places.places.find((item) => item.id === placeId)
  );

  useEffect(() => {
    console.log(place);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{place.title}</Text>
      </View>
      <Image source={{ uri: place.image }} style={styles.image} />
      <View style={styles.addressContainer}>
        <Text style={styles.post}>{place.post}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
    padding: 20,
  },
  location: {
    margin: 20,
    width: "90%",
    maxWidth: 350,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },

  map: {
    height: 300,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
  },
  post: {
    fontSize: 18,
  },
});

export default DetailScreen;
