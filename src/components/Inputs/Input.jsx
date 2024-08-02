import clsx from 'clsx'
import { TextInput } from 'react-native'

export const Input = ({
  placeholder,
  width,
  height,
  txtColor,
  bgColor,
  border,
  otherStyles
}) => (
  <TextInput
    style={{ width, height, color: txtColor, backgroundColor: bgColor }}
    className={clsx('py-1 px-2', border && 'rounded-md', otherStyles)}
    placeholder={placeholder}
  />
)
