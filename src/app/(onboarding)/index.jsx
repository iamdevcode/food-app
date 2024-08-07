import { SvgFirstScreen } from '#/svg/onboarding/SvgFirstScreen'
import { OnBoardingScroll } from '@/components/__atoms__/OnBoardingScroll'
import { Stack } from 'expo-router'
import { StatusBar, Text, View } from 'react-native'

export default function FirstScreen() {
  return (
    <>
      <View className="p-8 flex-1 bg-primary">
        <View
          className="flex-1 justify-center items-center"
          style={{ gap: 10 }}
        >
          <SvgFirstScreen />
          <Text className="text-2xl text-white font-black mt-8">
            Delicious Food
          </Text>
          <Text className="text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <OnBoardingScroll select="first" />
      </View>
      <StatusBar barStyle="light-content" />
      <Stack.Screen options={{ header: () => null }} />
    </>
  )
}
