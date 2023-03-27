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
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: 18,
    marginBottom: 6,
  },
  address: {
    color: "#777",
    fontSize: 16,
  },
});
