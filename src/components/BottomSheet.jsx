import colors from '#/constants/colors'
import { Ionicons } from '@expo/vector-icons'
import {
  BottomSheetBackdrop,
  BottomSheetModal
  // useBottomSheetModal
} from '@gorhom/bottom-sheet'
import { forwardRef, useState } from 'react'
import { Text, View } from 'react-native'
import { Button } from './Buttons/Button'
import { Input } from './Inputs/Input'

export const BottomSheet = forwardRef(({}, ref) => {
  const [active, setActive] = useState(true)
  // const { dismiss } = useBottomSheetModal()

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={['50%']}
      handleIndicatorStyle={{ display: 'none' }}
      // backgroundStyle={}
      backdropComponent={props => (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
        />
      )}
    >
      <View className="px-4 my-4" style={{ gap: 30 }}>
        <View className="flex-row justify-center" style={{ gap: 10 }}>
          <Button
            title="Delivery"
            width="40%"
            height={32}
            txtColor={active ? '#fff' : colors.primary}
            bgColor={active ? colors.primary : colors.lightGrey}
            otherStyles="rounded-full"
            onPress={() => setActive(true)}
          />
          <Button
            title="Pickup"
            width="40%"
            height={32}
            txtColor={!active ? '#fff' : colors.primary}
            bgColor={!active ? colors.primary : colors.lightGrey}
            otherStyles="rounded-full"
            onPress={() => setActive(false)}
          />
        </View>
        <View style={{ gap: 20 }}>
          <View style={{ gap: 5 }}>
            <Text className="text-base text-mediumDark font-bold">
              Your location
            </Text>
            <View className="flex-row items-center">
              <View className="bg-lightGrey h-[40px] justify-center pl-2">
                <Ionicons
                  name="location-outline"
                  size={20}
                  color={colors.primary}
                />
              </View>
              <Input
                width="85%"
                height={40}
                placeholder="London"
                txtColor={colors.mediumDark}
                bgColor={colors.lightGrey}
              />
              <View className="bg-lightGrey h-[40px] justify-center pr-2">
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.primary}
                />
              </View>
            </View>
          </View>
          <View style={{ gap: 5 }}>
            <Text className="text-base text-mediumDark font-bold">
              Arrival Time
            </Text>
            <View className="flex-row items-center">
              <View className="bg-lightGrey h-[40px] justify-center pl-2">
                <Ionicons
                  name="stopwatch-outline"
                  size={20}
                  color={colors.primary}
                />
              </View>
              <Input
                width="85%"
                height={40}
                placeholder="Now"
                txtColor={colors.mediumDark}
                bgColor={colors.lightGrey}
              />
              <View className="bg-lightGrey h-[40px] justify-center pr-2">
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.primary}
                />
              </View>
            </View>
          </View>
        </View>
        <Button
          title="Confirm"
          width="100%"
          height={50}
          txtColor="#fff"
          bgColor={colors.primary}
        />
      </View>
    </BottomSheetModal>
  )
})
