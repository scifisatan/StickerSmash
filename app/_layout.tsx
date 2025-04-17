// layout file for root route
// added (tabs) convention for tab navigation
// it is like grouped layout but enables tab

import { Stack } from "expo-router";
import { ThemeProvider } from "@/context/ThemeContext";
import { EmojiProvider } from "@/context/EmojiContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <EmojiProvider>
        <Stack
          screenOptions={{
            statusBarStyle: "inverted",
            statusBarBackgroundColor: "#25292e",
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </EmojiProvider>
    </ThemeProvider>
  );
}
