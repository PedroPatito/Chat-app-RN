import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { addPlace } from "../store/places.actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ImageSelector from "../components/ImageSelector";

const ProfilePicture = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [post, setPost] = useState("");
  const handleTitleChange = (text) => setTitle(text);
  const handlePostChange = (text) => setPost(text);

  const handleSave = () => {
    dispatch(addPlace(title, image, post));
    navigation.navigate("Home");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleTitleChange}
        />
        <ImageSelector onImage={setImage} />
        <Text style={styles.label}>Post</Text>
        <TextInput
          style={styles.input}
          value={post}
          onChangeText={handlePostChange}
        />
        <Pressable onPress={handleSave} style={styles.button}>
          <Text style={styles.textButton}>Post</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  label: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  button: {
    backgroundColor: "#F3722C",
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
  },
  textButton: {
    fontSize: 16,
    color: "white",
  },
});
