import * as FileSystem from "expo-file-system";
import { insertPosts, fetchPosts } from "../db";
export const ADD_PLACE = "ADD_PLACE";
export const LOAD_PLACE = "LOAD_PLACE";

export const addPlace = (title, image, post) => {
  // return { type: ADD_PLACE, payload: {title}}
  return async (dispatch) => {
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;

    try {
      FileSystem.moveAsync({
        from: image,
        to: Path,
      });
      const result = await insertPosts(title, Path, post);
      console.log(result);
    } catch (err) {
      console.log(err.message);
      throw err;
    }
    dispatch({ type: ADD_PLACE, payload: { title, image: Path, post } });
  };
};

export const loadPosts = () => {
  return async (dispatch) => {
    try {
      const result = await fetchPosts();
      console.log(result);
      dispatch({ type: LOAD_PLACE, places: result.rows._array });
    } catch (error) {}
  };
};
