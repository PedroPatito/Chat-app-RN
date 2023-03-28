import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../colors";
import { Entypo } from "@expo/vector-icons";
import PlaceItem from "../components/PlaceItem";
import { useSelector, useDispatch } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import * as postsAction from "../store/places.actions";

const Home = ({ image, title }) => {
  const navigation = useNavigation();
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsAction.loadPosts());
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("ProfilePicture")}>
          <Text style={styles.newpost}>New post</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <PlaceItem
      title={item.title}
      image={item.image}
      onSelect={() => navigation.navigate("Detail", { placeId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Chat")}
        style={styles.chatButton}
      >
        <Entypo name="chat" size={24} color={colors.lightGray} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#fff",
  },
  chatButton: {
    backgroundColor: "#277DA1",
    height: 50,
    width: 100,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#277DA1",
    shadowOffset: {
      width: 0,
      height: 2,

    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 50,
  },
  flatList: {
    width: "100%",
    height: 100,
  },
  newpost: {
    fontSize: 20,
    marginRight: 10,
    backgroundColor: "#277DA1",
    color: "white",
    borderRadius: 10,
    padding: 5,
  },

});
