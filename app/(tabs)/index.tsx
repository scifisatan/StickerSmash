import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

import { View, StyleSheet, Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState, useRef } from "react";
import { captureRef } from "react-native-view-shot";
import domtoimage from "dom-to-image";

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

import { type ImageSource } from "expo-image";
import { BG_COLOR } from "@/app/constants";

const PlaceholderImage = require("@/assets/images/background-image.png");

export const IMAGE_WIDTH = 320;
export const IMAGE_HEIGHT = 440;

export default function Index() {
  const imageRef = useRef<View>(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [image, setImage] = useState(PlaceholderImage);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmojis, setPickedEmojis] = useState<ImageSource[]>([]);

  const [isSaving, setIsSaving] = useState<boolean>(false);
  const onReset = () => {
    setImage(PlaceholderImage);
    setPickedEmojis([]);
    setShowAppOptions(false);
  };
  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    setIsSaving(true);
    if (Platform.OS !== "web") {
      try {
        const localUri = await captureRef(imageRef, {
          // height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Saved!");
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsSaving(false);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement("a");
        link.download = "sticker-smash.jpeg";
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      } finally {
        setIsSaving(false);
      }
    }
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  if (status === null) {
    requestPermission();
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
        }}
        ref={imageRef}
        collapsable={false}
        onLayout={(e) => {
          console.log("x, y", e.nativeEvent.layout.x, e.nativeEvent.layout.y);
        }}
      >
        <ImageViewer imgSource={image} />
        {pickedEmojis.length > 0 &&
          pickedEmojis.map((emoji, index) => (
            <EmojiSticker key={index} imageSize={40} stickerSource={emoji} />
          ))}
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 70,
        }}
      >
        {showAppOptions ? (
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton name="add" onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
              isLoading={isSaving}
            />
          </View>
        ) : (
          <View>
            <Button
              theme="primary"
              icon="picture-o"
              onPress={pickImageAsync}
              label="Choose a photo"
            />
            <Button
              label="Use this photo"
              onPress={() => setShowAppOptions(true)}
            />
          </View>
        )}
      </View>
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList
          onSelect={(emoji) => {
            setPickedEmojis((currentEmojis) => [...currentEmojis, emoji]);
          }}
          onCloseModal={onModalClose}
        />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
    alignItems: "center",
  },

  optionsRow: {
    flexDirection: "row",
  },
});
