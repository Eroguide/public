import styled from '@emotion/styled'

export const CardMainContainer = styled.div<{ inSwipe?: boolean }>`
  width: ${({ inSwipe }) => (inSwipe ? '100%' : '628px')};
  min-width: 500px;
  flex-direction: column;
  border-radius: 32px;
  margin-bottom: 32px;
  border: 2px solid ${({ theme }) => theme.grayScale[1]};
  position: relative;
  ${({ theme }) => theme.media.mobile`
      width: 100%;
      min-width: 320px;
  `}
`

export const CardImageWrapper = styled.div`
  border-radius: 32px 32px 0 0;
  display: flex;
  width: 100%;
  height: 296px;
  position: relative;
  background: #ebebf0 url('/img/dog.jpg') no-repeat center top;
  background-size: cover;
  overflow: hidden;
`

export const CardContent = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 0 0 32px 32px;
`

export const ImageProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Title = styled.h4`
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.fontSize['xl']};
  font-weight: 600;
`

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.fontSize['m']};
  font-weight: 600;
`

export const BottomLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 32px;
`

export const DateText = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize['xs']};
  color: ${({ theme }) => theme.grayScale['2']};
`

export const ReadMoreButton = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  flex-wrap: nowrap;
  flex-direction: row;
  padding: 8px 16px;
  border: 2px solid ${({ theme }) => theme.grayScale[1]};
  border-radius: 32px;
`
