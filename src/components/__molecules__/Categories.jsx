import { categories } from '#/constants/uidata/restaurant/categories'
import { FlatList, Image, Text, TouchableOpacity } from 'react-native'

export const Categories = () => (
  <FlatList
    data={categories}
    horizontal
    contentContainerStyle={{
      alignItems: 'flex-start',
      gap: 10,
      paddingVertical: 2
    }}
    renderItem={({ item: { text, img }, index }) => (
      <TouchableOpacity
        key={index}
        className="w-[100px] h-[100px] bg-lightGrey p-1 rounded-md"
        style={{ elevation: 1 }}
      >
        <Image source={img} className="w-full h-[70px] rounded-md" />
        <Text className="text-mediumDark font-bold mt-1 text-xs">{text}</Text>
      </TouchableOpacity>
    )}
  />
)
