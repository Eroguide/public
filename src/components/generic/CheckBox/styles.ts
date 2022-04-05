import styled from '@emotion/styled'
import { StyledComponentProps } from './CheckBox'

export const Input = styled.input`
  display: none;
`

export const CheckboxContainer = styled.div<StyledComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 16px;
  margin-right: 12px;
  border-radius: 4px;

  ${({ theme, disabled, isError }) =>
    disabled
      ? `
        background: ${theme.grayScale[0]};
        border: 2px solid ${theme.grayScale[1]};
      `
      : isError
      ? `
        background: ${theme.primary[1]};
      `
      : `
        background: ${theme.grayScale[0]};
        border: 2px solid ${theme.grayScale[1]};
  `};

  svg {
    display: ${({ isError }) => (isError ? null : 'none')};
  }
`

export const Label = styled.label<StyledComponentProps>`
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? width : '100%')};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? fontSize : theme.fontSize['m']};
  color: ${({ theme }) => theme.grayScale[4]};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    ${CheckboxContainer} {
      ${({ theme, disabled, isError }) =>
        disabled || isError
          ? null
          : `
            background: rgba(216, 14, 93, 0.05);
            border: 2px solid ${theme.primary[1]};
      `}
    }
  }

  input:checked + ${CheckboxContainer} {
    box-shadow: none;
    background: ${({ theme, isError }) => (isError ? null : theme.primary[1])};

    svg {
      display: block;
    }

    svg path {
      fill: ${({ theme }) => theme.primary[1]};
    }
  }
`
