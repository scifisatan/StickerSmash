import { StyleSheet, Text, View } from "react-native";
import { BG_COLOR, FOREGROUND_COLOR } from "@/app/constants";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BG_COLOR,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  text: {
    color: FOREGROUND_COLOR,
    fontSize: 16,
  },
});

export default Settings;
