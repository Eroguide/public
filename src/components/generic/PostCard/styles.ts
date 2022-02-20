import styled from '@emotion/styled'

export const CardMainContainer = styled.div`
  width: 302px;
  flex-direction: column;
  border-radius: 32px;
  margin-bottom: 32px;
  position: relative;
  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`

export const CardImageWrapper = styled.div`
  border-radius: 32px;
  display: flex;
  width: 100%;
  height: 296px;
  position: relative;
  background: #ebebf0 url('/img/dog.jpg') no-repeat center top;
  background-size: cover;
  overflow: hidden;
  z-index: 1;
`

export const ImageProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Description = styled.div`
  display: flex;
  padding: 16px 8px;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.fontSize['m']};
  font-weight: 600;
`
