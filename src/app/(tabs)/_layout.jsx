import { tabs_routes } from '@/router/tabs/routes'
import { MaterialIcons } from '@expo/vector-icons'
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
      <TouchableOpacity
        className="absolute right-4 bottom-[80px] w-[50px] h-[50px] justify-center items-center bg-primary rounded-full"
        style={{ elevation: 1 }}
      >
        <MaterialIcons name="message" size={30} color="#fff" />
      </TouchableOpacity>
    </>
  )
}
