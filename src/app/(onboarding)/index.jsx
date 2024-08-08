import colors from '#/constants/theme/colors'
import { onboarding } from '#/constants/uidata/onboarding'
import { Button } from '@/components/__atoms__/Buttons/Button'
import { OnBoardingScroll } from '@/components/__atoms__/OnBoardingScroll'
import { router } from 'expo-router'
import { FlatList, StatusBar, Text, View } from 'react-native'

export default function OnBoardingHomeScreen() {
  return (
    <>
      <FlatList
        className="flex-1 bg-primary"
        horizontal
        pagingEnabled
        data={onboarding}
        renderItem={({
          item: { icon, title, description, state, button },
          index
        }) => (
          <View key={index}>
            <View
              className="flex-1 w-[360px] justify-center items-center"
              style={{ gap: 10 }}
            >
              {icon}
              <Text className="text-2xl text-white text-center font-black mt-8">
                {title}
              </Text>
              <Text className="text-white text-center px-6">{description}</Text>
            </View>
            {button && (
              <Button
                title="Get Started"
                width="80%"
                height={48}
                txtColor={colors.primary}
                bgColor="#fff"
                otherStyles="rounded-full mb-8 mx-auto"
                onPress={() => router.replace('(auth)')}
              />
            )}
            {state && <OnBoardingScroll select={state} />}
          </View>
        )}
      />
      <StatusBar barStyle="light-content" />
    </>
  )
}
