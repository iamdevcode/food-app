import { TabHeader } from '@/components/TabHeader'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <TabHeader />
        }}
      />
    </Stack>
  )
}
