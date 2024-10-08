import { restaurants } from '#/constants/uidata/restaurant/restaurants'
import { Categories } from '@/components/__molecules__/Categories'
import { Restaurant } from '@/components/__molecules__/Restaurant'
import { MaterialIcons } from '@expo/vector-icons'
import { FlatList, ScrollView, Text, TouchableOpacity } from 'react-native'

export default function HomeScreen() {
  return (
    <>
      <ScrollView
        className="bg-white p-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 15, paddingBottom: 40 }}
      >
        <Categories />
        <Text className="text-base text-mediumDark font-bold">
          Top picks in your neighborhood
        </Text>
        <FlatList
          data={restaurants}
          horizontal
          contentContainerStyle={{
            alignItems: 'flex-start',
            gap: 10,
            paddingVertical: 2
          }}
          renderItem={({ item, index }) => (
            <Restaurant key={index} restaurant={item} />
          )}
        />
        <Text className="text-base text-mediumDark font-bold">
          Offers near you
        </Text>
        <FlatList
          data={restaurants}
          horizontal
          contentContainerStyle={{
            alignItems: 'flex-start',
            gap: 10,
            paddingVertical: 2
          }}
          renderItem={({ item, index }) => (
            <Restaurant key={index} restaurant={item} />
          )}
        />
      </ScrollView>
      <TouchableOpacity
        className="absolute right-4 bottom-[50px] w-[50px] h-[50px] justify-center items-center bg-primary rounded-full"
        style={{ elevation: 1 }}
      >
        <MaterialIcons name="message" size={30} color="#fff" />
      </TouchableOpacity>
    </>
  )
}
