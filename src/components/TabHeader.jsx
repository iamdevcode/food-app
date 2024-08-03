import colors from '#/constants/theme/colors'
import icons from '#/icons'
import { Input } from '@/components/Inputs/Input'
import { Ionicons } from '@expo/vector-icons'
import { useRef } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { BottomSheet } from './BottomSheet'

export const TabHeader = () => {
  const bottomSheetRef = useRef(null)

  const onPress = () => {
    bottomSheetRef.current?.present()
  }
  return (
    <View className="p-4 mt-7 w-full bg-white">
      <View className="flex-row items-center w-full">
        <TouchableOpacity>
          <Image source={icons.bike} className="w-[30px] h-[30px]" />
        </TouchableOpacity>
        <TouchableOpacity className="ml-4" onPress={onPress}>
          <Text className="text-medium font-medium">Delivery - Now</Text>
          <View className="flex-row items-center gap-x-2">
            <Text className="text-base text-mediumDark font-bold">
              Selected location
            </Text>
            <Ionicons name="chevron-down" size={24} color={colors.primary} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="ml-auto bg-lightGrey rounded-full p-2">
          <Ionicons name="person-outline" size={24} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity className="ml-1 bg-lightGrey rounded-full p-2">
          <Ionicons name="sunny" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <View className="mt-5 flex-row items-center w-full">
        <View className="flex-row items-center flex-1">
          <View className="bg-lightGrey h-[40px] justify-center pl-2">
            <Ionicons name="search" size={20} color={colors.primary} />
          </View>
          <Input
            width="85%"
            height={40}
            placeholder="Restaurants, groceries, dishes..."
            txtColor={colors.mediumDark}
            bgColor={colors.lightGrey}
          />
        </View>
        <TouchableOpacity className="bg-lightGrey rounded-full p-2">
          <Ionicons name="options-outline" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <BottomSheet ref={bottomSheetRef} />
    </View>
  )
}
