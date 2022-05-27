import styled from '@emotion/styled'
export const MapPinLeg = styled.span<{ isActive: boolean; type: string }>`
  content: '';
  width: 1px;
  height: 1px;
  border-top: 24px solid
    ${({ theme, isActive, type }) =>
      isActive
        ? type === 'lady'
          ? theme.primary[0]
          : theme.support[0]
        : theme.grayScale[0]};
  border-right: 24px solid
    ${({ theme, isActive, type }) =>
      isActive
        ? type === 'lady'
          ? theme.primary[0]
          : theme.support[0]
        : theme.grayScale[0]};
  transform: rotate(0deg);
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  transition: border 0.2s ease-in-out;
`

export const MapPinWrapper = styled.div`
  position: relative;
  height: 40px;
  width: auto;
  &:hover {
    cursor: pointer;
  }
`

export const MapPin = styled.div<{ type: string; isActive: boolean }>`
  background-size: cover;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid
    ${({ theme, isActive, type }) =>
      isActive
        ? type === 'lady'
          ? theme.primary[0]
          : theme.support[0]
        : theme.grayScale[0]};
  ${({ theme }) => theme.typography.h5};
  font-weight: 600;
  color: white;
  position: relative;
  z-index: 34;
  background: ${({ theme, type }) =>
    type === 'lady' ? theme.primary[0] : theme.support[0]};
  transition: 0.2s ease-in-out;
  // &::before {
  //   content: '';
  //   width: 1px;
  //   height: 1px;
  //   border-top: 24px solid ${({ theme }) => theme.primary[0]};
  //   border-right: 24px solid ${({ theme }) => theme.primary[0]};
  //   transform: rotate(0deg);
  //   position: absolute;
  //   left: -4px;
  //   bottom: -4px;
  //   z-index: -1;
  // }
`
