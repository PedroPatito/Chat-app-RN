import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import colors from "../colors";

const PlaceItem = ({ title, image, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: image }} />
      <View styles={styles.info}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    // backgroundColor: '#E9C46A',
    borderRadius: 15,
    // shadowColor: "black",
    // shadowOpacity: 1,
    // shadowOffset: { width: 1, height: 5 },
    // shadowRadius: 10,
    // elevation: 10,
    

  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "black",
    fontSize: 20,
    marginBottom: 6,
    marginLeft: 20,
  },
  address: {
    color: "#777",
    fontSize: 16,
  },
});
