import colors from '#/constants/theme/colors'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { TouchableOpacity } from 'react-native'

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#fff'
          }
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: () => (
              <Ionicons name="home" size={24} color={colors.primary} />
            ),
            tabBarShowLabel: false
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: () => (
              <FontAwesome name="user" size={24} color={colors.primary} />
            ),
            tabBarShowLabel: false
          }}
        />
      </Tabs>
      <TouchableOpacity
        className="absolute right-4 bottom-[80px] w-[50px] h-[50px] justify-center items-center bg-primary rounded-full"
        style={{ elevation: 1 }}
      >
        <MaterialIcons name="message" size={30} color="#fff" />
      </TouchableOpacity>
    </>
  )
}
