import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PRIMARY_COLOR, BG_COLOR, FOREGROUND_COLOR } from "@/app/constants";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: PRIMARY_COLOR,
        headerShadowVisible: false,
        headerTintColor: FOREGROUND_COLOR,
        tabBarStyle: {
          backgroundColor: BG_COLOR,
        },
        headerStyle: {
          backgroundColor: BG_COLOR,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Sticker Smash",
          headerTitleAlign: "center",
          headerTitleStyle: style.headerTitle,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "User Guide",
          headerTitleAlign: "center",
          headerTitleStyle: style.headerTitle,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerTitleAlign: "center",
          headerTitleStyle: style.headerTitle,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings-sharp" : "settings-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const style = StyleSheet.create({
  headerTitle: {
    color: PRIMARY_COLOR,
    fontSize: 24,
    fontWeight: "bold",
  },
});
