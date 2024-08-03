import { TabHeader } from '@/components/TabHeader'
import { AppProvider } from '@/context/app'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function RootLayout() {
  return (
    <AppProvider>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ header: () => <TabHeader /> }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </AppProvider>
  )
}
