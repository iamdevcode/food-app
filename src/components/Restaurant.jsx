import { Link } from 'expo-router'
import { Image, TouchableOpacity } from 'react-native'

export const Restaurant = ({ image }) => (
  <Link href={''} asChild>
    <TouchableOpacity
      className="w-[300px] h-[300px] bg-lightGrey p-1 items-center rounded-md"
      style={{ elevation: 1 }}
    >
      <Image source={image} className="w-[280px] h-[250px] rounded-md" />
      {/* <Text className="text-mediumDark font-bold mt-1 text-xs"></Text> */}
    </TouchableOpacity>
  </Link>
)
