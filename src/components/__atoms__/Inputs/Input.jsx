import { SvgIconHiddenPassword, SvgIconVisiblePassword } from '#/svg/icons'
import clsx from 'clsx'
import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

export const Input = ({
  placeholder,
  type,
  width,
  height,
  txtColor,
  bgColor,
  roundedFull,
  border,
  disabled,
  icon,
  otherStyles
}) => {
  const [show, setShow] = useState(false)
  return (
    <View
      style={[
        { width, height, color: txtColor, backgroundColor: bgColor },
        border && { borderWidth: 1, borderColor: border }
      ]}
      className={clsx(
        'rounded-md relative p-3',
        disabled && 'opacity-30',
        roundedFull && 'rounded-full',
        otherStyles
      )}
    >
      <TextInput
        className={clsx('w-[90%]')}
        editable={!disabled}
        placeholder={placeholder}
      />
      {type === 'password' && (
        <TouchableOpacity
          className="absolute right-3 bottom-[12px]"
          onPress={() => setShow(!show)}
        >
          {show ? <SvgIconVisiblePassword /> : <SvgIconHiddenPassword />}
        </TouchableOpacity>
      )}
      {icon && <Text className="absolute right-3 bottom-[12px]">{icon}</Text>}
    </View>
  )
}
