import { Label, Input, CheckboxContainer, Title } from './styles'

import Checkmark from '/public/img/check-box-icon.svg'

export type CheckboxProps = {
  name: string
  label?: string
  defaultChecked?: boolean
  disabled?: boolean
  isError?: boolean
  fontSize?: string
  width?: string
  onChange?: (value: string, name: string) => void
}
export type StyledComponentProps = Pick<
  CheckboxProps,
  'disabled' | 'isError' | 'fontSize' | 'width'
>

export const CheckBox: React.FC<CheckboxProps> = ({
  name,
  label,
  defaultChecked,
  disabled,
  isError,
  fontSize,
  width,
  onChange,
}) => {
  return (
    <Label
      disabled={disabled}
      isError={isError}
      fontSize={fontSize}
      width={width}
    >
      <Input
        onChange={(e) => {
          onChange?.(e.target.checked ? '1' : '0', name)
        }}
        name={name}
        type="checkbox"
        disabled={disabled}
        defaultChecked={defaultChecked}
      />
      <CheckboxContainer disabled={disabled} isError={isError}>
        {!disabled && <Checkmark />}
      </CheckboxContainer>
      <Title>{label}</Title>
    </Label>
  )
}
