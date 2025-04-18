import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { PRIMARY_COLOR } from "@/constants";
import { useTheme } from "@/hooks/useTheme";

//since this component will be used primarily as primary button
// it's styles are different than others

type Props = {
  name: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
};

export default function CircleButton({ name, onPress }: Props) {
  const { colors } = useTheme();
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable
        style={[styles.circleButton, { backgroundColor: colors.foreground }]}
        onPress={onPress}
      >
        <MaterialIcons name={name} size={38} color={colors.background} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: PRIMARY_COLOR,
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});
