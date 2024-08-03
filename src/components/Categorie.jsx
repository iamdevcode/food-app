import { Image, Text, TouchableOpacity } from 'react-native'

export const Categorie = ({ title, image }) => (
  <TouchableOpacity
    className="w-[100px] h-[100px] bg-lightGrey p-1 rounded-md"
    style={{ elevation: 1 }}
  >
    <Image source={image} className="w-full h-[70px] rounded-md" />
    <Text className="text-mediumDark font-bold mt-1 text-xs">{title}</Text>
  </TouchableOpacity>
)
