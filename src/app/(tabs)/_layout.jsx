import colors from '#/constants/theme/colors'
import { TabHeader } from '@/components/__organisms__/TabHeader'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { StatusBar } from 'react-native'

const tabs_routes = [
  {
    name: 'index',
    icon: <Ionicons name="home" size={24} color={colors.primary} />
  },
  {
    name: 'profile',
    icon: <FontAwesome name="user" size={24} color={colors.primary} />
  }
]

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          header: () => <TabHeader />,
          tabBarStyle: {
            backgroundColor: '#fff'
          }
        }}
      >
        {tabs_routes.map(({ name, icon }, index) => (
          <Tabs.Screen
            key={index}
            name={name}
            options={{
              tabBarIcon: () => icon,
              tabBarShowLabel: false
            }}
          />
        ))}
      </Tabs>
      <StatusBar backgroundColor="#fff" />
    </>
  )
}
