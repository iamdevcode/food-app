import colors from '#/constants/theme/colors'
import { SvgOnBoarding } from '#/svg/SvgOnBoardings'
import { Button } from '@/components/__atoms__/Buttons/Button'
import { Input } from '@/components/__atoms__/Inputs/Input'
import { FontAwesome } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'

const { width } = Dimensions.get('screen')

export default function SignUpScreen() {
  return (
    <View className="flex-1 p-4 items-center bg-white" style={{ gap: 16 }}>
      <SvgOnBoarding width={width} />
      <Input
        placeholder="Nombre de usuario..."
        width="100%"
        height={48}
        icon={<FontAwesome name="user" size={24} color={colors.primary} />}
        txtColor={colors.mediumDark}
        bgColor={colors.lightGrey}
        border={colors.primary}
        roundedFull
      />
      <Input
        placeholder="Contraseña..."
        width="100%"
        height={48}
        type="password"
        txtColor={colors.mediumDark}
        bgColor={colors.lightGrey}
        border={colors.primary}
        roundedFull
      />
      <Input
        placeholder="Repetir Contraseña..."
        width="100%"
        height={48}
        type="password"
        txtColor={colors.mediumDark}
        bgColor={colors.lightGrey}
        border={colors.primary}
        roundedFull
      />
      <Button
        title="Registrarse"
        width="100%"
        height={48}
        txtColor="#fff"
        bgColor={colors.primary}
        otherStyles="rounded-full"
        onPress={() => router.push('(tabs)')}
      />
      <TouchableOpacity
        className="ml-auto"
        onPress={() => router.push('signin')}
      >
        <Text className="text-medium underline">Ya tienes una cuenta?</Text>
      </TouchableOpacity>
    </View>
  )
}
