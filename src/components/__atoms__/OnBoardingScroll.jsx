import clsx from 'clsx'
import { Text, View } from 'react-native'

const dots = ['first', 'second', 'thrid', 'fourth']

export const OnBoardingScroll = ({ select }) => (
  <View
    className="flex-row items-center justify-center pb-8"
    style={{ gap: 8 }}
  >
    {dots.map(dot => (
      <Text
        key={dot}
        className={clsx(
          'w-[10px] aspect-square bg-white rounded-full',
          dot !== select && 'opacity-50 scale-90'
        )}
      />
    ))}
  </View>
)
