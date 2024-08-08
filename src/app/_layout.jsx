import { AppProvider } from '@/context/app'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Toast from 'react-native-toast-message'

// SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  // const [loaded] = useFonts({
  //   SpaceMono: require('../../assets/fonts/poppins-latin-400-normal.ttf')
  // })

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync()
  //   }
  // }, [loaded])

  // if (!loaded) {
  //   return null
  // }

  return (
    <AppProvider>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
      <Toast />
    </AppProvider>
  )
}
