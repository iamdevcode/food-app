import colors from '#/constants/theme/colors'
import Svg, { Path } from 'react-native-svg'

export const SvgIconHiddenPassword = () => (
  <Svg width={24} height={24}>
    <Path
      fill={colors.primary}
      d="m11.8 9 3.2 3.2V12a3 3 0 0 0-3-3h-.2Zm-4.3.8 1.6 1.5-.1.7a3 3 0 0 0 3.7 3l1.5 1.5a5 5 0 0 1-6.7-6.7ZM2 4.3l2.3 2.3.4.4c-1.6 1.3-3 3-3.7 5a11.8 11.8 0 0 0 15.4 6.7l.4.4 3 2.9 1.2-1.3L3.3 3M12 7a5 5 0 0 1 4.6 6.8l3 3c1.5-1.3 2.7-3 3.4-4.8A11.8 11.8 0 0 0 8 5.2l2.2 2.1A5 5 0 0 1 12 7Z"
    />
  </Svg>
)

export const SvgIconVisiblePassword = () => (
  <Svg width={24} height={24}>
    <Path
      fill={colors.primary}
      d="M21.8 12.4s-2-3-4.8-4.8A8.8 8.8 0 0 0 12 6c-1.8 0-3.6.6-5 1.6-2.8 1.9-4.7 4.7-4.8 4.8a1 1 0 0 0 0 1.2s2 3 4.8 4.8a8.8 8.8 0 0 0 10 0c2.8-1.9 4.7-4.7 4.8-4.8a1 1 0 0 0 0-1.2ZM12 16.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm2-3.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </Svg>
)
