import colors from '#/constants/theme/colors'
import { SvgOnBoarding } from '#/svg/SvgOnBoardings'
import { Button } from '@/components/__atoms__/Buttons/Button'
import { Input } from '@/components/__atoms__/Inputs/Input'
import { router } from 'expo-router'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'

const { width } = Dimensions.get('screen')

export default function SignInScreen() {
  return (
    <View className="flex-1 p-4 items-center bg-white" style={{ gap: 16 }}>
      <SvgOnBoarding width={width} />
      <Input
        placeholder="Nombre de usuario..."
        width="100%"
        height={48}
        txtColor={colors.mediumDark}
        bgColor={colors.lightGrey}
        border={colors.primary}
        roundedFull
      />
      <Input
        placeholder="Contraseña..."
        width="100%"
        height={48}
        txtColor={colors.mediumDark}
        bgColor={colors.lightGrey}
        border={colors.primary}
        roundedFull
      />
      <Button
        title="Sign In"
        width="100%"
        height={48}
        txtColor="#fff"
        bgColor={colors.primary}
        otherStyles="rounded-full"
        onPress={() => router.push('(tabs)')}
      />
      <TouchableOpacity
        className="ml-auto"
        onPress={() => router.push('signup')}
      >
        <Text className="text-medium underline">Olvidaste la contraseña?</Text>
      </TouchableOpacity>
    </View>
  )
}
