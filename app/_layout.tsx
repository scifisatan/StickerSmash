// layout file for root route
// added (tabs) convention for tab navigation
// it is like grouped layout but enables tab

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        statusBarStyle: "inverted",
        statusBarBackgroundColor: "#25292e",
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
