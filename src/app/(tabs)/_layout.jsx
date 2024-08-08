import { TabHeader } from '@/components/__organisms__/TabHeader'
import { tabs_routes } from '@/router/tabs/routes'
import { Tabs } from 'expo-router'
import { StatusBar } from 'react-native'

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
