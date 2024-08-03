import { categories } from '#/constants/uidata/categories'
import { restaurants } from '#/constants/uidata/restaurants'
import { Categorie } from '@/components/Categorie'
import { Restaurant } from '@/components/Restaurant'
import { MaterialIcons } from '@expo/vector-icons'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View className="bg-white px-4" style={{ gap: 20 }}>
      <FlatList
        data={categories}
        horizontal
        contentContainerStyle={{
          alignItems: 'flex-start',
          gap: 5,
          paddingVertical: 2
        }}
        renderItem={({ item: { text, img }, index }) => (
          <Categorie key={index} title={text} image={img} />
        )}
      />
      <Text className="text-base text-mediumDark font-bold">
        Top picks in your neighborhood
      </Text>
      <FlatList
        data={restaurants}
        horizontal
        contentContainerStyle={{
          alignItems: 'flex-start',
          gap: 5,
          paddingVertical: 2
        }}
        renderItem={({ item: { img }, index }) => (
          <Restaurant key={index} image={img} />
        )}
      />
      <TouchableOpacity
        className="absolute right-4 -bottom-24 w-[50px] h-[50px] justify-center items-center bg-primary rounded-full"
        style={{ elevation: 1 }}
      >
        <MaterialIcons name="message" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}
