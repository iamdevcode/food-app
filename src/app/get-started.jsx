import colors from '#/constants/theme/colors'
import { SvgOnBoarding } from '#/svg/SvgOnBoardings'
import { Button } from '@/components/__atoms__/Buttons/Button'
import { router, Stack } from 'expo-router'
import { Dimensions, Text, View } from 'react-native'

const { width } = Dimensions.get('window')

export default function GetStartedOnBoardingScreen() {
  return (
    <>
      <View
        className="bg-white p-4 flex-1 justify-center items-center"
        style={{ gap: 25 }}
      >
        <SvgOnBoarding width={width} />
        <Text className="text-[26px] text-center text-mediumDark">
          Explore now to experience the benefits
        </Text>
        <Text className="text-medium w-4/5 mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </Text>
        <Button
          title="Get Started"
          width="100%"
          height={48}
          txtColor="#fff"
          bgColor={colors.primary}
          otherStyles="rounded-full"
          onPress={() => router.replace('signin')}
        />
      </View>
      <Stack.Screen options={{ header: () => null }} />
    </>
  )
}
