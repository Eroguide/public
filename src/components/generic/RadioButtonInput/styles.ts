import styled from '@emotion/styled'
import { StyledComponentProps } from './RadioButtonInput'

export const Input = styled.input`
  display: none;
`

export const Circle = styled.div`
  height: 8px;
  width: 8px;
  background-color: cornflowerblue;
  border-radius: 100%;
  display: block;
`

export const CheckboxContainer = styled.div<StyledComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 16px;
  border-radius: 100%;
  background: ${({ theme }) => theme.grayScale[0]};
  border: 2px solid ${({ theme }) => theme.grayScale[1]};

  ${Circle} {
    display: ${({ isError }) => (isError ? null : 'none')};
  }

  &:hover {
    background: ${({ theme }) => theme.grayScale[1]};
    border: 2px solid ${({ theme }) => theme.grayScale[2]};
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
        (disabled || isError) &&
        `
            background: rgba(216, 14, 93, 0.05);
            border: 2px solid ${theme.primary[1]};
      `}
    }
  }
  input:checked + ${CheckboxContainer} {
    box-shadow: none;
    background: ${({ theme, isError }) =>
      isError ? null : theme.grayScale[1]};
    border: 2px solid ${({ theme }) => theme.grayScale[1]};
    ${Circle} {
      display: block;
    }
  }
`

export const Title = styled.span<{ forFilter?: boolean }>`
  ${({ theme }) => theme.typography.pl};
  font-weight: 400;
  margin-left: 8px;
  color: ${({ theme }) => theme.grayScale[5]};
`
