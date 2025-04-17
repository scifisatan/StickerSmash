import { Pressable, StyleSheet, Text, ActivityIndicator } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@/hooks/useTheme";

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
  const { colors } = useTheme();
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.foreground} />
      ) : (
        <MaterialIcons name={icon} size={24} color={colors.foreground} />
      )}
      <Text style={[styles.iconButtonLabel, { color: colors.foreground }]}>
        {isLoading ? "" : label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    marginTop: 12,
  },
});
