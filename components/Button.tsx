import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { PRIMARY_COLOR } from "@/constants";
import { useTheme } from "@/hooks/useTheme";

type Props = {
  label: string;
  theme?: "primary";
  icon?: keyof typeof FontAwesome.glyphMap;
  onPress?: () => void;
};

function Button({ label, theme, icon, onPress }: Props) {
  const { colors } = useTheme();
  if (theme === "primary") {
    return (
      // for primary button, the colors are inverse
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: PRIMARY_COLOR, borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: colors.foreground }]}
          onPress={onPress}
        >
          {icon && (
            <FontAwesome
              name={icon}
              size={18}
              color={colors.background}
              style={styles.buttonIcon}
            />
          )}
          <Text style={[styles.buttonLabel, { color: colors.background }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View
      style={[styles.buttonContainer, { backgroundColor: colors.background }]}
    >
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={[styles.buttonLabel, { color: colors.foreground }]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    fontSize: 16,
  },
});

export default Button;
