import { Text, View } from 'react-native'

export const Separator = () => (
  <View className="flex-row items-center">
    <Text className="bg-medium/20 h-[1px] flex-1" />
    <Text className="text-medium/50 px-4">Or</Text>
    <Text className="bg-medium/20 h-[1px] flex-1" />
  </View>
)
