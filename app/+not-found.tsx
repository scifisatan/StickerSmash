//placeholder file when routes are not found
//typically links to main home page

import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import { BG_COLOR, FOREGROUND_COLOR } from "@/app/constants";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: FOREGROUND_COLOR,
  },
});
