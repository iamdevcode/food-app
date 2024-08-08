import clsx from 'clsx'
import { Image, Text, TouchableOpacity } from 'react-native'

export const Button = ({
  onPress,
  title,
  width,
  height,
  txtColor,
  bgColor,
  disabled,
  otherStyles,
  icon,
  border
}) => (
  <TouchableOpacity
    style={[
      {
        width,
        height,
        backgroundColor: bgColor,
        elevation: 1
      },
      border && { borderWidth: 1, borderColor: border },
      icon && { gap: 10 }
    ]}
    onPress={onPress}
    disabled={disabled}
    className={clsx(
      'flex-row justify-center items-center rounded-md',
      disabled && 'opacity-50',
      otherStyles
    )}
  >
    {icon && <Image source={icon} style={{ width: 20, height: 20 }} />}
    <Text className="font-semibold text-base" style={{ color: txtColor }}>
      {title}
    </Text>
  </TouchableOpacity>
)
