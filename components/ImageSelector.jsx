import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Button,
  Pressable,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
//import * as Permissions from "expo-permissions";
import colors from "../colors";
const ImageSelector = (props) => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de la camara para usar la aplicacion",
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };

  const handlerTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });
    setPickedUri(image.assets[0].uri);
    props.onImage(image.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri ? (
          <Text>Seleccione su foto de perfil</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUri }} />
        )}
      </View>

      <Pressable onPress={handlerTakeImage} style={styles.button}>
        <Text style={styles.textButton}>Take picture</Text>
      </Pressable>
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#277DA1",
    borderWidth: 1,
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#4D908E",
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
  },
  textButton: {
    fontSize: 16,
    color: "white",
  },
});
