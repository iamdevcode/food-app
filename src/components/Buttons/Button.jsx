import clsx from 'clsx'
import { Text, TouchableOpacity } from 'react-native'

export const Button = ({
  onPress,
  title,
  width,
  height,
  txtColor,
  bgColor,
  disabled,
  otherStyles
}) => (
  <TouchableOpacity
    style={{
      width,
      height,
      backgroundColor: bgColor
    }}
    onPress={onPress}
    disabled={disabled}
    className={clsx('justify-center items-center rounded-md', otherStyles)}
  >
    <Text className="font-semibold text-base" style={{ color: txtColor }}>
      {title}
    </Text>
  </TouchableOpacity>
)
