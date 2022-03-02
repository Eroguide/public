import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div<{ isReady: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 24px;
  overflow: hidden;
  background-size: cover;
  opacity: ${({ isReady }) => (isReady ? 1 : 0)};
`

export const Details = styled.span`
  position: absolute;
  left: -100px;
  padding: 16px 8px;
  background: white;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.grayScale[5]};
  visibility: hidden;
`

export const MapPin = styled.div<{ type: string }>`
  background-size: cover;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid ${({ theme }) => theme.grayScale[0]};
  font-size: ${({ theme }) => theme.fontSize['s']};
  font-weight: 600;
  color: white;
  position: relative;
  z-index: 34;
  background: ${({ theme, type }) =>
    type === 'lady' ? theme.primary[0] : theme.support[0]};
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

export const MapPinLeg = styled.span`
  content: '';
  width: 1px;
  height: 1px;
  border-top: 24px solid white;
  border-right: 24px solid white;
  transform: rotate(0deg);
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
`

export const MapPinWrapper = styled.div`
  position: relative;
  height: 40px;
  width: auto;
`
