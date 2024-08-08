import { Stack } from 'expo-router'
import { View } from 'react-native'

export default function ProfileScreen() {
  return (
    <>
      <View className="bg-white p-4 flex-1"></View>
      <Stack.Screen options={{ header: () => null }} />
    </>
  )
}
