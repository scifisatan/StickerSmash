import { Text, View, StyleSheet } from "react-native";
import { HIGHLIGHT_COLOR, PRIMARY_COLOR } from "../../constants";
import { useTheme } from "@/hooks/useTheme";

export default function Index() {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title]}>🚀 StickerSmash Guide 🚀</Text>
      <Text style={[styles.intro, { color: colors.foreground }]}>
        Jazz up your photos in a few easy steps:
      </Text>

      <View style={styles.stepContainer}>
        <Text style={styles.stepNumber}>1.</Text>
        <Text style={[styles.stepText, { color: colors.foreground }]}>
          Tap <Text style={styles.highlight}>Choose a photo</Text> to select an
          image.
        </Text>
      </View>

      <View style={styles.stepContainer}>
        <Text style={styles.stepNumber}>2.</Text>
        <Text style={[styles.stepText, { color: colors.foreground }]}>
          Tap <Text style={styles.highlight}>Use this photo</Text>. Now you can:
        </Text>
      </View>
      <View style={styles.subStepContainer}>
        <Text style={styles.bulletPoint}>•</Text>
        <Text style={[styles.subStepText, { color: colors.foreground }]}>
          <Text style={styles.highlight}>Add Sticker (+):</Text> Browse or add
          your own custom stickers.
        </Text>
      </View>
      <View style={styles.subStepContainer}>
        <Text style={styles.bulletPoint}>•</Text>
        <Text style={[styles.subStepText, { color: colors.foreground }]}>
          <Text style={styles.highlight}>Reset:</Text> Clear the photo and
          stickers.
        </Text>
      </View>
      <View style={styles.subStepContainer}>
        <Text style={styles.bulletPoint}>•</Text>
        <Text style={[styles.subStepText, { color: colors.foreground }]}>
          <Text style={styles.highlight}>Save:</Text> Save your masterpiece.
        </Text>
      </View>

      <View style={styles.stepContainer}>
        <Text style={styles.stepNumber}>3.</Text>
        <Text style={[styles.stepText, { color: colors.foreground }]}>
          Edit stickers:
        </Text>
      </View>
      <View style={styles.subStepContainer}>
        <Text style={styles.bulletPoint}>•</Text>
        <Text style={[styles.subStepText, { color: colors.foreground }]}>
          <Text style={styles.highlight}>Drag</Text> to move stickers around.
        </Text>
      </View>
      <View style={styles.subStepContainer}>
        <Text style={styles.bulletPoint}>•</Text>
        <Text style={[styles.subStepText, { color: colors.foreground }]}>
          <Text style={styles.highlight}>Double-tap</Text> to rotate stickers.
        </Text>
      </View>

      <View style={styles.stepContainer}>
        <Text style={styles.stepNumber}>4.</Text>
        <Text style={[styles.stepText, { color: colors.foreground }]}>
          Toggle <Text style={styles.highlight}>Dark Mode</Text> in settings for
          your preferred theme.
        </Text>
      </View>

      <Text style={[styles.outro, { color: colors.foreground }]}>
        Unleash your creativity and have fun! 🎉
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  title: {
    color: PRIMARY_COLOR,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    width: "100%",
  },
  intro: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
    width: "100%",
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
    width: "100%",
  },
  stepNumber: {
    color: PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
    width: 20,
    lineHeight: 22,
  },
  stepText: {
    fontSize: 16,
    flex: 1,
    lineHeight: 22,
  },
  subStepContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
    marginLeft: 28,
    width: "90%",
  },
  bulletPoint: {
    color: PRIMARY_COLOR,
    fontSize: 16,
    marginRight: 8,
    lineHeight: 22,
  },
  subStepText: {
    fontSize: 16,
    flex: 1,
    lineHeight: 22,
  },
  highlight: {
    fontWeight: "bold",
    color: HIGHLIGHT_COLOR,
  },
  outro: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 25,
    lineHeight: 22,
    width: "100%",
  },
});
