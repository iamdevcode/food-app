import colors from '#/constants/theme/colors'
import { restaurant } from '#/constants/uidata/restaurant/restaurant'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Button } from '../__atoms__/Buttons/Button'

export const RestaurantTags = () => {
  const [active, setActive] = useState(0)

  return (
    <FlatList
      data={restaurant.tags}
      horizontal
      contentContainerStyle={{ gap: 10, paddingVertical: 20 }}
      renderItem={({ item: tags, index }) => (
        <Button
          key={index}
          title={tags}
          width={120}
          height={32}
          txtColor={active === index ? '#fff' : colors.primary}
          bgColor={active === index ? colors.primary : colors.lightGrey}
          otherStyles="rounded-full"
          onPress={() => setActive(index)}
        />
      )}
    />
  )
}
