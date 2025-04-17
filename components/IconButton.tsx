import { Pressable, StyleSheet, Text, ActivityIndicator } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
  isLoading?: boolean;
};

export default function IconButton({
  icon,
  label,
  onPress,
  isLoading = false,
}: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <MaterialIcons name={icon} size={24} color="#fff" />
      )}
      <Text style={styles.iconButtonLabel}>{isLoading ? "" : label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
