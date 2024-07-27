import { COLORS } from '#/constants/theme'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { Text, View } from 'react-native'

export default function TabsLayout() {
  const tabBarStyle = {
    backgroundColor: COLORS.primary.light,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0
  }
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'grid' : 'grid-outline'}
              color={focused ? COLORS.secondary.dark : COLORS.secondary.light}
              size={26}
            />
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              color={focused ? COLORS.secondary.dark : COLORS.secondary.light}
              size={26}
            />
          )
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <View className="w-[26px] h-[26px] relative">
              {focused ? (
                <FontAwesome
                  name="shopping-cart"
                  size={26}
                  color={COLORS.secondary.dark}
                />
              ) : (
                <Ionicons
                  name="cart-outline"
                  size={26}
                  color={COLORS.secondary.light}
                />
              )}
              <Text className="absolute -right-2 -top-1 bg-red rounded-md px-1 text-white text-[10px]">
                0
              </Text>
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              color={focused ? COLORS.secondary.dark : COLORS.secondary.light}
              size={26}
            />
          )
        }}
      />
    </Tabs>
  )
}
