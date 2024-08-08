import colors from '#/constants/theme/colors'
import icons from '#/icons'
import { SvgLogo } from '#/svg/SvgLogo'
import { Button } from '@/components/__atoms__/Buttons/Button'
import { Separator } from '@/components/__atoms__/Separator'
import { router } from 'expo-router'
import { StatusBar, View } from 'react-native'
import Toast from 'react-native-toast-message'

export default function SignInSignUpScreen() {
  return (
    <>
      <View
        className="flex-1 justify-center items-center bg-white mt-7 p-4"
        style={{ gap: 25 }}
      >
        <SvgLogo />
        <Button
          title="Iniciar Sesión"
          width="100%"
          height={48}
          txtColor="#fff"
          bgColor={colors.primary}
          otherStyles="rounded-full"
          onPress={() => router.push('signin')}
        />
        <Button
          title="Registrarse"
          width="100%"
          height={48}
          txtColor={colors.primary}
          bgColor="#fff"
          otherStyles="rounded-full"
          onPress={() => router.push('signup')}
          border={colors.primary}
        />
        <Separator />
        <Button
          title="Continuar con Google"
          width="100%"
          height={48}
          txtColor={colors.mediumDark}
          bgColor="#fff"
          otherStyles="rounded-full"
          onPress={() =>
            Toast.show({
              type: 'error',
              text1: 'No disponible por el momento ☹️',
              text1Style: {
                color: colors.medium,
                fontSize: 14
              }
            })
          }
          icon={icons.google}
          border={colors.medium}
        />
        <Button
          title="Continuar con Facebook"
          width="100%"
          height={48}
          txtColor={colors.mediumDark}
          bgColor="#fff"
          otherStyles="rounded-full"
          onPress={() =>
            Toast.show({
              type: 'error',
              text1: 'No disponible por el momento ☹️',
              text1Style: {
                color: colors.medium,
                fontSize: 14
              }
            })
          }
          icon={icons.facebook}
          border={colors.medium}
        />
      </View>
      <StatusBar backgroundColor="#fff" />
    </>
  )
}
