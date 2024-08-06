import colors from '#/constants/theme/colors'
import { restaurant } from '#/constants/uidata/restaurant'
import { RestaurantTags } from '@/components/__molecules__/RestaurantTags'
import { Feather, Ionicons } from '@expo/vector-icons'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { Image, ScrollView, StatusBar, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function RestaurantScreen() {
  const { id } = useLocalSearchParams()
  const { back } = useRouter()

  return (
    <View className="relative">
      <Image source={restaurant.img} style={{ width: '100%', height: 200 }} />
      {/* header */}
      <View className="w-full px-4 absolute top-10 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={back}
          className="bg-lightGrey rounded-full p-2"
        >
          <Feather name="arrow-left" size={24} color={colors.primary} />
        </TouchableOpacity>
        <View className="flex-row items-center" style={{ gap: 10 }}>
          <TouchableOpacity className="bg-lightGrey rounded-full p-2">
            <Ionicons name="share-outline" size={24} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-lightGrey rounded-full p-2">
            <Ionicons name="search" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* section information */}
      <View className="p-4 bg-white">
        <Text className="text-xl text-mediumDark font-bold text-center">
          {restaurant.name} - Centre Point
        </Text>
        <RestaurantTags />
        <ScrollView
          contentContainerStyle={{ paddingVertical: 10 }}
        ></ScrollView>
      </View>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Stack.Screen
        options={{
          header: () => null
        }}
      />
      <StatusBar barStyle="light-content" />
    </View>
  )
}
