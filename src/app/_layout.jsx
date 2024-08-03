import colors from '#/constants/theme/colors'
import { TabHeader } from '@/components/TabHeader'
import { AppProvider } from '@/context/app'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Tabs } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function RootLayout() {
  return (
    <AppProvider>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Tabs
            screenOptions={{
              tabBarStyle: {
                backgroundColor: '#fff'
              }
            }}
          >
            <Tabs.Screen
              name="index"
              options={{
                header: () => <TabHeader />,
                tabBarIcon: () => (
                  <Ionicons name="home" size={24} color={colors.primary} />
                ),
                tabBarShowLabel: false
              }}
            />
            <Tabs.Screen
              name="profile"
              options={{
                header: () => <TabHeader />,
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
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </AppProvider>
  )
}
