import { categories } from '#/constants/uidata/categories'
import { restaurants } from '#/constants/uidata/restaurants'
import { Categorie } from '@/components/Categorie'
import { Restaurant } from '@/components/Restaurant'
import { FlatList, ScrollView, Text } from 'react-native'

export default function HomeScreen() {
  return (
    <ScrollView
      className="bg-white p-4"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 15 }}
    >
      <FlatList
        data={categories}
        horizontal
        contentContainerStyle={{
          alignItems: 'flex-start',
          gap: 10,
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
    </ScrollView>
  )
}
