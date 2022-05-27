import { Label, Input, CheckboxContainer, Title, Circle } from './styles'

export type CheckboxProps = {
  name?: string
  label?: string
  defaultChecked?: boolean
  disabled?: boolean
  isError?: boolean
  fontSize?: string
  width?: string
}
export type StyledComponentProps = Pick<
  CheckboxProps,
  'disabled' | 'isError' | 'fontSize' | 'width'
>

export const RadioButtonInput: React.FC<CheckboxProps> = ({
  name,
  label,
  defaultChecked,
  disabled,
  isError,
  fontSize,
  width,
}) => {
  return (
    <Label
      disabled={disabled}
      isError={isError}
      fontSize={fontSize}
      width={width}
    >
      <Input
        name={name}
        type="radio"
        disabled={disabled}
        defaultChecked={defaultChecked}
      />
      <CheckboxContainer disabled={disabled} isError={isError}>
        {!disabled && <Circle />}
        {/*{!disabled && <Checkmark />}*/}
      </CheckboxContainer>
      <Title>{label}</Title>
    </Label>
  )
}
