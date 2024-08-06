import colors from '#/constants/theme/colors'
import { Ionicons } from '@expo/vector-icons'
import { Text, View } from 'react-native'

export const NumberOrders = () => (
  <View className="relative">
    <Ionicons name="cart" size={24} color={colors.primary} />
    <Text className="absolute -right-1 -top-1 bg-red-500 text-white text-[10px] px-1 rounded-full">
      0
    </Text>
  </View>
)
