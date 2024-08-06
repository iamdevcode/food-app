import colors from '#/constants/theme/colors'
import icons from '#/icons'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export const Restaurant = ({ restaurant }) => (
  <Link href={`/restaurant/${4}`} asChild>
    <TouchableOpacity
      className="w-[300px] relative bg-lightGrey p-1 rounded-md"
      style={{ elevation: 1 }}
    >
      <Image source={restaurant.img} className="w-full h-[250px] rounded-md" />
      <View style={{ padding: 10, gap: 5 }}>
        <Text className="text-base text-mediumDark font-bold">
          {restaurant.name}
        </Text>
        <View className="flex-row items-center gap-x-1">
          <Image source={icons.star} style={{ width: 15, height: 15 }} />
          <Text className="text-medium">
            {restaurant.rating} {restaurant.ratings}
          </Text>
        </View>
        <View className="flex-row items-center gap-x-1">
          <Ionicons name="location-outline" size={20} color={colors.medium} />
          <Text className="text-medium">{restaurant.distance}</Text>
        </View>
      </View>
      {/* time */}
      <View
        className="absolute right-2 bottom-[84px] bg-lightGrey flex-row items-center p-[6px] rounded-full"
        style={{ gap: 5, elevation: 1 }}
      >
        <Ionicons name="time" size={20} color={colors.medium} />
        <Text className="text-mediumDark font-bold">{restaurant.duration}</Text>
        <Text className="text-medium">min</Text>
      </View>
    </TouchableOpacity>
  </Link>
)
