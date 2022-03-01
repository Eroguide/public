import styled from '@emotion/styled'

export const CardMainContainer = styled.div<{ inSwipe?: boolean }>`
  width: ${({ inSwipe }) => (inSwipe ? '100%' : '302px')};
  min-width: 302px;
  flex-direction: column;
  border-radius: 32px;
  margin-bottom: 32px;
  position: relative;
  padding: 5px;
  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`

export const PostCardInner = styled.div`
  width: 100%;
  background-color: #fff;
  position: relative;
  z-index: 1;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    inset: 0 0 0 0;
    filter: blur(0);
    transition: filter 0.15s ease-in-out;
    z-index: -1;
    border-radius: 32px;
  }
  &:hover {
    &:before {
      content: '';
      background-color: ${({ theme }) => theme.opacity[70][0]};
      transition: filter 0.15s ease-in-out;
      filter: blur(4px);
    }
  }

  &:active {
    &:before {
      content: '';
      background-color: ${({ theme }) => theme.opacity[70][0]};
      transition: filter 0.2s ease-out;
      filter: blur(2px);
    }
  }
`

export const CardImageWrapper = styled.div`
  border-radius: 32px;
  display: flex;
  width: 100%;
  height: 296px;
  position: relative;
  background: #ebebf0 url('/img/bg.jpg') no-repeat center top;
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
