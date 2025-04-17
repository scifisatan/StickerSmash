import { Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "@/constants";
import * as ImagePicker from "expo-image-picker";
import { useContext } from "react";
import { EmojiContext } from "@/context/EmojiContext";

const AddEmojiButton = () => {
  const { addEmoji } = useContext(EmojiContext);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      addEmoji(result.assets[0]);
    }
  };
  return (
    <Pressable
      style={[styles.image, styles.addButton]}
      onPress={pickImageAsync}
    >
      <MaterialIcons name="add" size={38} color={PRIMARY_COLOR} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#464C55",
    borderRadius: 100,
  },
});

export default AddEmojiButton;
