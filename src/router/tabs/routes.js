import colors from '#/constants/theme/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

export const tabs_routes = [
  {
    name: 'index',
    icon: <Ionicons name="home" size={24} color={colors.primary} />
  },
  {
    name: 'profile',
    icon: <FontAwesome name="user" size={24} color={colors.primary} />
  }
]
