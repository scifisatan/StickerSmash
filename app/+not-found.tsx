//placeholder file when routes are not found
//typically links to main home page

import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import { useTheme } from "@/hooks/useTheme";

export default function NotFoundScreen() {
  const { colors } = useTheme();
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={(styles.container, { backgroundColor: colors.background })}>
        <Link href="/" style={(styles.button, { color: colors.foreground })}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
  },
});
