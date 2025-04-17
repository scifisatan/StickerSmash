import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PRIMARY_COLOR } from "@/constants";
import { useTheme } from "@/hooks/useTheme";

export default function TabLayout() {
  const { colors } = useTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: PRIMARY_COLOR,
        headerShadowVisible: false,
        headerTintColor: colors.foreground,
        tabBarStyle: {
          backgroundColor: colors.background,
          padding: 12,
          paddingVertical: 4,
        },
        headerStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
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
