import styled from '@emotion/styled'

export const CardMainContainer = styled.div`
  width: 100%;
  max-width: 312px;
  flex-direction: column;
  border-radius: 32px;
  margin-bottom: 32px;
  position: relative;
  padding: 9px;

  ${({ theme }) => theme.media.mobile`
    width: 100% ;
      max-width:100%;
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
  background: #ebebf0 url('/img/fake.png') no-repeat center center;
  background-size: cover;
  overflow: hidden;
  z-index: 1;
  box-shadow: inset 2px 1px 5px #fff;
  transition: box-shadow 0.15s ease-in-out;
  &:hover {
    transition: box-shadow 0.15s ease-in-out;
    box-shadow: inset 0 0 0 #fff;
  }
`

export const ImageProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Description = styled.div`
  width: 100%;
  display: flex;
  padding: 16px 8px;
  flex-wrap: wrap;
  ${({ theme }) => theme.typography.pl};
  font-weight: 600;
`
