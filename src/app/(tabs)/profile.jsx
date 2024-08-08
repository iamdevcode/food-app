import colors from '#/constants/theme/colors'
import { profile } from '#/constants/uidata/profile'
import images from '#/images'
import { Button } from '@/components/__atoms__/Buttons/Button'
import { Ionicons } from '@expo/vector-icons'
import { router, Tabs } from 'expo-router'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

export default function ProfileScreen() {
  return (
    <>
      <ScrollView
        className="bg-white mt-7"
        contentContainerStyle={{ padding: 16 }}
      >
        <Image
          source={images.juice}
          className="w-[150px] h-[150px] rounded-full mx-auto"
        />
        <View
          className="items-center my-6 bg-lightGrey rounded-md"
          style={{ gap: 5 }}
        >
          <Text className="text-lg text-mediumDark font-bold">@juice</Text>
          <Text className="text-base text-mediumDark">+1 999 999999999</Text>
        </View>
        <View style={{ gap: 20 }}>
          {profile.map(title => (
            <TouchableOpacity
              key={title}
              className="flex-row items-center justify-between"
            >
              <Text className="text-base text-mediumDark font-medium">
                {title}
              </Text>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={colors.mediumDark}
              />
            </TouchableOpacity>
          ))}
        </View>
        <Button
          title="Sign Out"
          width="100%"
          height={48}
          txtColor="#fff"
          bgColor={colors.primary}
          otherStyles="rounded-full mt-[80px]"
          onPress={() => router.replace('(auth)')}
        />
      </ScrollView>
      <Tabs.Screen options={{ header: () => null }} />
    </>
  )
}
