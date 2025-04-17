import { StyleSheet, Text, View, Switch } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { HIGHLIGHT_COLOR, PRIMARY_COLOR } from "../../constants";

const Settings = () => {
  const { colors, toggleTheme, theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.settingRow}>
        <Text style={[styles.text, { color: colors.foreground }]}>
          Dark Mode
        </Text>
        <Switch
          value={theme === "dark"}
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: "#767577" }}
          thumbColor={theme === "dark" ? PRIMARY_COLOR : "#f4f3f4"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 12,
  },
  text: {
    fontSize: 16,
  },
});

export default Settings;
