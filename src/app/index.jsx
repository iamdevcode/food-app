import colors from '#/constants/theme/colors'
import { SvgLogo } from '#/svg/SvgLogo'
import { router } from 'expo-router'
import { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      // router.push('(tabs)')
      router.replace('onboarding')
      // router.replace('(onboarding)')
    }, 1000)
  }, [])

  return (
    <View
      className="flex-1 justify-center items-center bg-white"
      style={{ gap: 20 }}
    >
      <SvgLogo />
      <ActivityIndicator size={35} color={colors.primary} />
    </View>
  )
}
