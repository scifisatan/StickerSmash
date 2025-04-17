import { useContext } from "react";
import { StyleSheet, FlatList, Platform, Pressable } from "react-native";
import { Image, ImageSource } from "expo-image";
import AddEmojiButton from "./AddEmojiButton";
import { EmojiContext } from "@/context/EmojiContext";

type Props = {
  onSelect: (image: ImageSource) => void;
  onCloseModal: () => void;
};

export default function EmojisList({ onSelect, onCloseModal }: Props) {
  const { emojis } = useContext(EmojiContext);

  const renderItem = ({
    item,
    index,
  }: {
    item: ImageSource;
    index: number;
  }) => {
    const isLastItem = index === emojis.length - 1;

    if (isLastItem) {
      return <AddEmojiButton />;
    }

    return (
      <Pressable
        onPress={() => {
          onSelect(item);
          onCloseModal();
        }}
      >
        <Image source={item} key={index} style={styles.image} />
      </Pressable>
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emojis}
      contentContainerStyle={styles.listContainer}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
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
