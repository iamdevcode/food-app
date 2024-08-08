import clsx from 'clsx'
import { TextInput } from 'react-native'

export const Input = ({
  placeholder,
  width,
  height,
  txtColor,
  bgColor,
  roundedFull,
  border,
  disabled,
  otherStyles
}) => (
  <TextInput
    style={[
      { width, height, color: txtColor, backgroundColor: bgColor },
      border && { borderWidth: 1, borderColor: border }
    ]}
    className={clsx(
      'py-1 px-4 rounded-md',
      roundedFull && 'rounded-full',
      otherStyles
    )}
    editable={!disabled}
    placeholder={placeholder}
  />
)
