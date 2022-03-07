import styled from '@emotion/styled'
import { InfoCardProps } from '@/components/generic/InfoCard/InfoCard'

export const Container = styled.div<InfoCardProps>`
  width: 100%;
  border-radius: 24px;
  border: 1px solid
    ${({ theme, strokeColor }) =>
      strokeColor === 'gray'
        ? theme.grayScale[2]
        : strokeColor === 'yellow'
        ? theme.support[1]
        : strokeColor === 'green'
        ? theme.support[2]
        : theme.grayScale[2]};
  display: flex;
  ${({ theme, strokeColor }) =>
    strokeColor === 'green' && `color: ${theme.support[2]}`};
  padding: ${({ padding }) => padding ?? '24px 40px'};
  margin: ${({ margin }) => margin ?? '8px 0'};
  justify-content: space-between;
  align-items: center;
`
